<?php

namespace App\Http\Controllers\Behind;



use App\Http\Models\Behind\BusinessType;
use Illuminate\Support\Facades\DB;

class BusinessController extends BaseController
{
    /**
     * 业务类型处理
     * @return
     */
    public function business_type()
    {
        $table = new BusinessType();
        $data = $table->get_business_type();
        $res = $this->recursive_array($data);
        foreach($res as $k => $v) {
            $res[$k]['parent'] = implode('->',array_reverse($v['parent']));
            $res[$k]['parent_id_list'] = json_encode($v['parent_id_list']);
            $res[$k]['json'] = json_encode($v);
        }
        return view('behind.business.business_type',[
            'page_title' => '业务分类',
            'data' => $res,
            'type_list' =>  htmlspecialchars_decode(json_encode($res)),
            'json_type' => json_encode($data)
        ]);
    }

    public function recursive_array(Array $arr) {
        $result = [];
        foreach($arr as $v) {
            $tmp = ['id'=>$v->id, 'name' => $v->name,'info' => $v->info, 'parent_id' => $v->parent_id,'child_list'=>[],'parent_id_list'=>[] ,'parent' => [],'status'=> $v->status?'不可用':'正常'];
            $result[$v->id] = $tmp;
        }

        foreach($result as $k => $v) {
            $parent_id = $v['parent_id'];
            while($parent_id) {
                $result[$k]['parent'][] = $result[$parent_id]['name'];
                $result[$k]['parent_id_list'][] = $parent_id;
                $result[$k]['child_list'][] = $result[$parent_id];
                $parent_id = $result[$parent_id]['parent_id'];
            }
        }
        return $result;
    }

    /**
     * 新增业务
     */
    public function add_business()
    {
        $data = request()->all();
        foreach($data as $key => $v) {
            if(!in_array($key,['id','name','info','parent_id'])){
                unset($data[$key]);
            }
        }
        if(!$data['info']) {
            $data['info'] = '';
        }

        //编辑
        if(array_key_exists('id',$data) && $id = $data['id']) {
            if(DB::table('business_type')->where('name','=',$data['name'])->where('id','<>',$data['id'])->first()) {
                return ['code'=>1,'msg'=>'该名称已存在'];
            }
            unset($data['id']);
            if(in_array($id,$this->get_parents_id($data['parent_id']))) {
                return ['code'=>1,'msg'=>'分类不能属于自己的子类！'];
            }
            //重新设置level
            $level = DB::table('business_type')->where(['id'=>$data['parent_id']])->value('level') + 1;
            $data['level'] = $level;

            $res = Db::table('business_type')->where(['id'=>$id])->update($data);
            if($res) {
                $result = ['code'=>0,'msg'=>'ok'];
            }
            else {
                $result = ['code'=>1,'msg'=>'编辑失败'];
            }
        }
        //没有则为新增
        else {
            if(DB::table('business_type')->where('name','=',$data['name'])->first()) {
                return ['code'=>1,'msg'=>'该名称已存在'];
            }
            $level = DB::table('business_type')->where(['id'=>$data['parent_id']])->value('level') + 1;
            $data['level'] = $level;
            $res = DB::table('business_type')->insert($data);
            if($res) {
                $result = ['code'=>0,'msg'=>'ok'];
            }
            else {
                $result = ['code'=>1,'msg'=>'新增失败'];
            }
        }
        return $result;
    }

    public function del_business_type() {
        $table = new BusinessType();
        $data = $table->set_business_type_status(request()->post('id'));
        if($data) {
            $res = ['code'=>0,'msg'=>'ok'];
        }
        else{
            $res = ['code'=>1,'msg'=>'修改失败'];
        }
        return $res;
    }

    /**
     * 查找上级节点
     * @param $id
     * @param array $condition
     */
    public function get_parents_id($id,$condition = []) {
        $first_id = $id;
        $res = [];
        do{
            $data = DB::table('business_type')->where(['id'=>$first_id])->where($condition)->first();
            $parent_id = $data->parent_id;
            if($data->parent_id) {
                $first_id = $data->parent_id;
                $res[] = $data->parent_id;
            }
        }while($parent_id!=0);
        return $res;
    }
}
