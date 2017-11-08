|表名|表类型|行格式|数据量(行)|数据长度|索引长度|空间碎片|自增主键但前值|检查时间|更新时间|创建时间|引擎|字符校验编码|创建选项|注释|
|----|------|------|----------|--------|--------|--------|--------------|--------|--------|--------|----|------------|--------|----|
|lzh_acl|BASE TABLE|Dynamic|17|28304|2048|0|32||2017-05-24 17:47:29|2017-05-24 17:47:29|MyISAM|utf8_unicode_ci|||
|lzh_action|BASE TABLE|Dynamic|30|1964|2048|0|41||2017-08-28 11:21:32|2017-08-22 14:24:30|MyISAM|utf8_general_ci|row_format=DYNAMIC|系统行为表|
|lzh_action_log|BASE TABLE|Fixed|452|452000|26624|0|492||2017-11-08 09:38:41|2017-08-23 11:31:23|MyISAM|utf8_general_ci|row_format=FIXED|行为日志表|
|lzh_ad|BASE TABLE|Dynamic|8|2948|2048|1592|18||2017-11-07 17:08:38|2017-05-24 17:47:30|MyISAM|utf8_general_ci|||
|lzh_app_equipment_identify|BASE TABLE|Compact|4|16384|0|0|22|||2017-09-25 18:06:47|InnoDB|utf8_general_ci||设备标识表|
|lzh_app_version|BASE TABLE|Compact|4|16384|16384|0|33|||2017-09-25 18:06:31|InnoDB|utf8_general_ci||客户端版本表|
|lzh_area|BASE TABLE|Dynamic|3412|80088|81920|0|3414|2017-05-24 17:47:31|2017-05-24 17:47:32|2017-05-24 17:47:31|MyISAM|utf8_general_ci|||
|lzh_article|BASE TABLE|Dynamic|1056|7475616|27648|2800|10367|2017-08-18 13:50:07|2017-11-07 17:12:35|2017-08-18 13:50:07|MyISAM|utf8_general_ci|||
|lzh_article_category|BASE TABLE|Dynamic|29|6672|2048|80|504||2017-09-26 11:26:03|2017-05-24 17:47:48|MyISAM|utf8_general_ci|||
|lzh_ausers|BASE TABLE|Dynamic|13|2620|4096|1312|57||2017-11-08 09:38:41|2017-05-24 17:47:48|MyISAM|utf8_general_ci|||
|lzh_auth_group|BASE TABLE|Dynamic|6|356|2048|0|12||2017-09-14 10:09:27|2017-09-13 18:31:52|MyISAM|utf8_general_ci||权限组表|
|lzh_auth_group_access|BASE TABLE|Fixed|1|32|4096|24||2017-08-15 18:54:29|2017-09-14 10:42:39|2017-08-15 18:54:24|MyISAM|utf8_general_ci||用户权限表|
|lzh_auth_rule|BASE TABLE|Dynamic|147|10460|5120|0|1009||2017-09-13 18:12:34|2017-08-16 13:21:06|MyISAM|utf8_general_ci||权限节点表|
|lzh_auto_borrow|BASE TABLE|Fixed|112|158760|16384|123480|1735|2017-06-02 10:11:22|2017-06-02 17:26:15|2017-06-02 10:11:22|MyISAM|utf8_general_ci|||
|lzh_auto_borrow_v2|BASE TABLE|Fixed|4|6137|4096|4845|2024||2017-11-03 16:18:27|2017-07-14 16:40:02|MyISAM|utf8_general_ci|||
|lzh_auto_invest_reward|BASE TABLE|Compact|3|16384|0|0|4|||2017-06-27 16:46:39|InnoDB|utf8_general_ci||2017-06-15 新版自动投标返利表|
|lzh_borrow_info|BASE TABLE|Compact|2733|5783552|262144|3145728|3029|||2017-09-27 09:08:28|InnoDB|utf8_general_ci|||
|lzh_borrow_investor|BASE TABLE|Compact|61380|9977856|5816320|4194304|63377|||2017-09-27 09:34:58|InnoDB|utf8_general_ci|||
|lzh_borrow_sub|BASE TABLE|Compact|47|16384|0|0|63|||2017-05-24 18:11:36|InnoDB|utf8_general_ci|||
|lzh_borrow_sub_right|BASE TABLE|Compact|423|81920|0|0|442|||2017-05-24 18:11:36|InnoDB|utf8_general_ci|||
|lzh_borrow_verify|BASE TABLE|Compact|2974|196608|65536|0||||2017-09-25 10:59:47|InnoDB|utf8_general_ci|||
|lzh_card|BASE TABLE|Compact|15258|1589248|0|4194304|15409|||2017-05-24 18:11:36|InnoDB|utf8_general_ci||2017新春红包表|
|lzh_channel|BASE TABLE|Dynamic|14|908|4096|0|23||2017-10-27 13:37:35|2017-05-24 17:48:35|MyISAM|utf8_general_ci||导航栏目表|
|lzh_commercial_pay|BASE TABLE|Compact|693|65536|0|0|706|||2017-05-24 18:11:37|InnoDB|utf8_general_ci|||
|lzh_config|BASE TABLE|Dynamic|10|2768|5120|1292|38|2017-08-18 12:05:32|2017-09-27 14:28:06|2017-08-18 12:05:26|MyISAM|utf8_general_ci|||
|lzh_cooper|BASE TABLE|Compact|2|16384|32768|0|3|||2017-10-25 10:24:51|InnoDB|utf8_general_ci||合作公司表|
|lzh_cooper_money|BASE TABLE|Compact|0|16384|0|0||||2017-11-03 09:41:22|InnoDB|utf8_general_ci||合作公司账户表|
|lzh_cooper_money_log|BASE TABLE|Compact|0|16384|16384|0|1|||2017-11-03 09:36:24|InnoDB|utf8_general_ci||合作方账户流水表|
|lzh_data_day_detail|BASE TABLE|Compact|136|65536|0|0|168|||2017-05-24 21:55:11|InnoDB|utf8_general_ci||运营日报|
|lzh_data_month_detail|BASE TABLE|Compact|0|16384|0|0|3|||2017-07-20 10:19:03|InnoDB|utf8_general_ci||运营月报|
|lzh_data_week_detail|BASE TABLE|Compact|0|16384|0|0|3|||2017-05-24 19:31:35|InnoDB|utf8_general_ci||运营周报|
|lzh_data_week_simple|BASE TABLE|Compact|136|49152|0|0|168|||2017-05-24 19:31:02|InnoDB|utf8_general_ci||运营周简报|
|lzh_email|BASE TABLE|Compact|24219|7880704|0|4194304|54025|||2017-05-24 18:11:37|InnoDB|utf8_general_ci|||
|lzh_email_receiver|BASE TABLE|Compact|643319|47792128|24182784|5242880|958321|||2017-05-24 18:11:37|InnoDB|utf8_general_ci|||
|lzh_exp_invest|BASE TABLE|Compact|94|16384|16384|0|95|||2017-05-24 18:11:37|InnoDB|utf8_general_ci||理财金投资表|
|lzh_face_apply|BASE TABLE|Dynamic|34|1112|3072|0|35||2017-05-24 17:52:45|2017-05-24 17:52:44|MyISAM|utf8_general_ci|||
|lzh_finalcial_intention|BASE TABLE|Compact|0|16384|0|0|1|||2017-05-24 18:11:37|InnoDB|utf8_general_ci|||
|lzh_finanical|BASE TABLE|Compact|296|16384|0|0|301|||2017-05-24 18:11:37|InnoDB|latin1_swedish_ci|||
|lzh_finanical_distance|BASE TABLE|Compact|798|65536|0|0|807|||2017-05-24 18:11:37|InnoDB|latin1_swedish_ci|||
|lzh_finanical_invest|BASE TABLE|Compact|438|65536|0|0|587|||2017-05-24 18:11:37|InnoDB|utf8_general_ci|||
|lzh_friend|BASE TABLE|Dynamic|6|612|3072|0|27||2017-08-21 11:30:44|2017-08-18 15:59:28|MyISAM|utf8_general_ci|||
|lzh_global|BASE TABLE|Dynamic|46|6404|2048|0|117||2017-06-30 10:45:59|2017-05-24 17:52:51|MyISAM|utf8_general_ci|||
|lzh_increase_rate|BASE TABLE|Compact|151|98304|0|0|156|||2017-09-18 16:11:39|InnoDB|utf8_general_ci||加息券统计表|
|lzh_inner_msg|BASE TABLE|Compact|154494|27836416|4734976|5242880|180549|||2017-09-21 11:41:10|InnoDB|utf8_general_ci|||
|lzh_investor_detail|BASE TABLE|Compact|90628|12075008|5275648|4194304|93241|||2017-09-05 15:32:03|InnoDB|utf8_general_ci|||
|lzh_licai|BASE TABLE|Compact|1336|98304|0|0|3342|||2017-05-24 18:11:38|InnoDB|utf8_general_ci|||
|lzh_licai_invest|BASE TABLE|Compact|125|16384|0|0|134|||2017-05-24 18:11:38|InnoDB|utf8_general_ci|||
|lzh_member_address|BASE TABLE|Dynamic|0|0|1024|0|1||2017-05-24 17:54:40|2017-05-24 17:54:40|MyISAM|utf8_general_ci|||
|lzh_member_answer|BASE TABLE|Compact|0|16384|0|0|1|||2017-05-24 18:11:39|InnoDB|utf8_general_ci|||
|lzh_member_apply|BASE TABLE|Dynamic|0|0|1024|0|1||2017-05-24 17:54:41|2017-05-24 17:54:41|MyISAM|utf8_general_ci|||
|lzh_member_bank|BASE TABLE|Compact|7468|1589248|245760|0|7937|||2017-10-25 14:16:49|InnoDB|utf8_general_ci|||
|lzh_member_banks|BASE TABLE|Dynamic|811|47940|13312|0|||2017-05-24 17:54:47|2017-05-24 17:54:46|MyISAM|utf8_general_ci|||
|lzh_member_card|BASE TABLE|Compact|129307|12075008|2637824|10485760|507783|||2017-09-08 10:37:32|InnoDB|utf8_general_ci||会员卡券表 - 2017|
|lzh_member_cash_log|BASE TABLE|Compact|50|16384|16384|0|92|||2017-05-24 18:11:39|InnoDB|utf8_general_ci||奖品兑换表|
|lzh_member_clerk|BASE TABLE|Compact|2|16384|0|0|3|||2017-08-25 11:04:30|InnoDB|utf8_general_ci||店员用户对应表|
|lzh_member_contact_info|BASE TABLE|Dynamic|879|29320|14336|0|||2017-05-24 17:55:13|2017-05-24 17:55:12|MyISAM|utf8_general_ci|||
|lzh_member_creditslog|BASE TABLE|Compact|74241|7880704|2637824|4194304|77401|||2017-05-24 18:11:39|InnoDB|utf8_general_ci|||
|lzh_member_data_info|BASE TABLE|Dynamic|10|408|3072|0|11||2017-05-24 17:55:44|2017-05-24 17:55:44|MyISAM|utf8_general_ci|||
|lzh_member_department_info|BASE TABLE|Dynamic|672|19348|11264|0|||2017-05-24 17:55:45|2017-05-24 17:55:44|MyISAM|utf8_general_ci|||
|lzh_member_ensure_info|BASE TABLE|Dynamic|523|12232|9216|0|||2017-05-24 17:55:46|2017-05-24 17:55:46|MyISAM|utf8_general_ci|||
|lzh_member_financial_info|BASE TABLE|Dynamic|609|15132|10240|0|||2017-05-24 17:55:47|2017-05-24 17:55:46|MyISAM|utf8_general_ci|||
|lzh_member_friend|BASE TABLE|Fixed|0|0|1024|0|1||2017-05-24 17:55:47|2017-05-24 17:55:47|MyISAM|utf8_general_ci|||
|lzh_member_house_info|BASE TABLE|Dynamic|546|11852|9216|0|||2017-05-24 17:55:49|2017-05-24 17:55:48|MyISAM|utf8_general_ci|||
|lzh_member_info|BASE TABLE|Compact|20434|2637824|0|4194304||||2017-05-24 17:55:49|InnoDB|utf8_general_ci|||
|lzh_member_limitlog|BASE TABLE|Compact|31|16384|16384|0|32|||2017-05-24 18:11:40|InnoDB|utf8_general_ci|||
|lzh_member_login|BASE TABLE|Dynamic|260190|8283360|7520256|0|260191|2017-05-24 17:55:59|2017-11-08 14:41:15|2017-05-24 17:55:59|MyISAM|utf8_general_ci|||
|lzh_member_login_limit|BASE TABLE|Compact|9|16384|0|0|52|||2017-06-15 16:28:48|InnoDB|utf8_general_ci||用户登录锁定表|
|lzh_member_lucky|BASE TABLE|Compact|0|16384|32768|0|1|||2017-05-24 18:11:41|InnoDB|utf8_general_ci||用户抽奖表|
|lzh_member_money|BASE TABLE|Compact|20955|2637824|0|4194304||||2017-05-24 17:57:26|InnoDB|utf8_general_ci||用户帐户表|
|lzh_member_money_total|BASE TABLE|Compact|21204|1589248|0|4194304||||2017-10-30 15:04:41|InnoDB|utf8_general_ci||龙虾节活动同进金额表|
|lzh_member_moneylog|BASE TABLE|Compact|479834|63520768|13123584|6291456|510735|||2017-05-24 18:11:41|InnoDB|utf8_general_ci|||
|lzh_member_movie_code|BASE TABLE|Compact|0|16384|16384|0|1|||2017-05-24 18:11:41|InnoDB|utf8_general_ci||会员电影票表|
|lzh_member_msg|BASE TABLE|Compact|140585|40435712|4734976|5242880|179742|||2017-09-21 10:29:09|InnoDB|utf8_general_ci|||
|lzh_member_payonline|BASE TABLE|Compact|99730|15220736|13697024|7340032|103654|||2017-06-12 18:54:13|InnoDB|utf8_general_ci|||
|lzh_member_real_name|BASE TABLE|Compact|50|16384|16384|0|58|||2017-06-13 14:49:04|InnoDB|utf8_general_ci||实名认证流水表|
|lzh_member_recharge|BASE TABLE|Compact|100873|15220736|21086208|6291456|103673|||2017-09-20 10:35:19|InnoDB|utf8_general_ci|||
|lzh_member_remoney|BASE TABLE|Dynamic|17|820|2048|0|18||2017-09-12 10:24:02|2017-08-24 16:31:57|MyISAM|utf8_general_ci||龙虾店返利|
|lzh_member_safequestion|BASE TABLE|Dynamic|1699|139964|23552|0|||2017-05-24 18:01:42|2017-05-24 18:01:41|MyISAM|utf8_general_ci|||
|lzh_member_scoreslog|BASE TABLE|Compact|77220|7880704|2637824|4194304|77545|||2017-09-26 18:02:54|InnoDB|utf8_general_ci|||
|lzh_member_withdraw|BASE TABLE|Compact|19158|2637824|622592|4194304|19351|||2017-09-20 15:11:31|InnoDB|utf8_general_ci|||
|lzh_members|BASE TABLE|Compact|20820|6832128|3555328|4194304|65574|||2017-09-21 17:53:46|InnoDB|utf8_general_ci|||
|lzh_members_lepao|BASE TABLE|Compact|1287|98304|0|0|1577|||2017-05-24 18:11:41|InnoDB|utf8_general_ci|||
|lzh_members_pnr|BASE TABLE|Compact|1301|131072|81920|0||||2017-05-24 18:02:30|InnoDB|utf8_general_ci||汇付天下会员信息表|
|lzh_members_status|BASE TABLE|Compact|20876|1589248|0|4194304||||2017-09-27 15:04:09|InnoDB|utf8_general_ci|||
|lzh_members_status_copy|BASE TABLE|Compact|21362|1589248|0|4194304||||2017-10-27 11:09:28|InnoDB|utf8_general_ci|||
|lzh_menu|BASE TABLE|Dynamic|150|12044|7168|0|185|2017-09-13 11:19:56|2017-11-07 15:51:59|2017-09-13 11:19:56|MyISAM|utf8_general_ci||后台菜单表|
|lzh_movie_code|BASE TABLE|Compact|268|49152|0|0|269|||2017-05-24 18:11:42|InnoDB|utf8_general_ci|||
|lzh_oauth|BASE TABLE|Dynamic|1582|122312|119808|0|1583||2017-05-24 18:02:42|2017-05-24 18:02:41|MyISAM|utf8_general_ci|||
|lzh_oneone|BASE TABLE|Compact|567|65536|0|0|671|||2017-05-24 18:11:42|InnoDB|utf8_general_ci|||
|lzh_operation_log|BASE TABLE|Compact|8914|3686400|688128|4194304|9660|||2017-05-24 18:11:42|InnoDB|utf8_general_ci|||
|lzh_partner|BASE TABLE|Compact|6|16384|16384|0|9|||2017-05-24 18:11:42|InnoDB|utf8_general_ci||商户表|
|lzh_partner_card|BASE TABLE|Compact|13536|1589248|540672|3145728|13501|||2017-08-24 09:12:09|InnoDB|utf8_general_ci||卡券序号表|
|lzh_partner_link|BASE TABLE|Compact|3|16384|16384|0|5|||2017-05-24 18:11:42|InnoDB|utf8_general_ci||商户投放信息表|
|lzh_partner_user_card|BASE TABLE|Compact|21|16384|0|0|31|||2017-08-25 17:06:48|InnoDB|utf8_general_ci||用户获取卡券表|
|lzh_partner_user_card2|BASE TABLE|Compact|83|16384|0|0|84|||2017-07-06 09:12:14|InnoDB|utf8_general_ci||用户获取卡券表|
|lzh_partner_waiter|BASE TABLE|Compact|0|16384|0|0|1|||2017-06-30 14:23:59|InnoDB|utf8_general_ci||商户服务员表|
|lzh_pay|BASE TABLE|Compact|2|16384|0|0|3|||2017-06-09 09:52:21|InnoDB|utf8_general_ci||支付通道表|
|lzh_pay_bank|BASE TABLE|Compact|33|16384|16384|0|34|||2017-06-07 20:37:27|InnoDB|utf8_general_ci||支付通道-银行卡表|
|lzh_phone|BASE TABLE|Compact|324342|16269312|0|4194304|376730|||2017-05-24 18:11:42|InnoDB|utf8_general_ci|||
|lzh_phone_hmd|BASE TABLE|Compact|3|16384|0|0|1668|||2017-05-24 18:11:42|InnoDB|utf8_general_ci|||
|lzh_picture|BASE TABLE|Dynamic|35|9116|2048|4544|189||2017-11-07 17:10:36|2017-08-17 16:16:14|MyISAM|utf8_general_ci|||
|lzh_plan|BASE TABLE|Compact|3|16384|16384|0|4|||2017-11-03 17:37:05|InnoDB|utf8_general_ci||理财计划表|
|lzh_plan_borrow|BASE TABLE|Compact|100|49152|16384|0|101|||2017-11-03 15:18:21|InnoDB|utf8_general_ci||理财计划-标的表|
|lzh_plan_invest|BASE TABLE|Compact|8|16384|32768|0|10|||2017-11-02 16:40:54|InnoDB|utf8_general_ci||理财计划投资明细表|
|lzh_plan_invest_borrow|BASE TABLE|Compact|0|16384|16384|0||||2017-11-02 09:54:17|InnoDB|utf8_general_ci||投资记录和标的匹配表|
|lzh_plat_money|BASE TABLE|Compact|0|16384|0|0||||2017-11-03 17:03:16|InnoDB|utf8_general_ci||平台账户表|
|lzh_plat_money_change|BASE TABLE|Compact|11|16384|0|0|12|||2017-11-03 16:45:59|InnoDB|utf8_general_ci||平台数据统计汇总日志表|
|lzh_plat_money_log|BASE TABLE|Compact|0|16384|0|0|1|||2017-11-03 17:05:09|InnoDB|utf8_general_ci||平台账户记录表|
|lzh_pledge|BASE TABLE|Compact|1177|114688|0|0|1196|||2017-05-24 18:11:43|InnoDB|utf8_general_ci|||
|lzh_promote_rebate|BASE TABLE|Compact|19|16384|16384|0|26|||2017-07-04 15:33:36|InnoDB|utf8_general_ci||推荐活动1W返佣表|
|lzh_promote_rebate2|BASE TABLE|Compact|8|16384|16384|0|18|||2017-08-24 16:34:21|InnoDB|utf8_general_ci||推荐活动1W返佣表|
|lzh_promotion_ad|BASE TABLE|Compact|11|16384|32768|0|13|||2017-10-17 11:10:39|InnoDB|utf8_general_ci||广告推广交互表|
|lzh_qd_socus|BASE TABLE|Compact|14|16384|0|0|90|||2017-05-24 18:11:43|InnoDB|utf8_general_ci|||
|lzh_ques_naire|BASE TABLE|Compact|0|16384|0|0|1|||2017-05-24 18:11:44|InnoDB|utf8_general_ci|||
|lzh_recommend_total|BASE TABLE|Compact|121|16384|0|0|124|||2017-05-24 18:11:44|InnoDB|utf8_general_ci|||
|lzh_redpag|BASE TABLE|Compact|81826|4734976|0|4194304|94765|||2017-05-24 18:11:44|InnoDB|utf8_general_ci|||
|lzh_redpaper|BASE TABLE|Compact|6369|458752|0|0|7490|||2017-05-24 18:11:44|InnoDB|utf8_general_ci|||
|lzh_redpaper_invest|BASE TABLE|Compact|3892|327680|0|0|5323|||2017-05-24 18:11:44|InnoDB|utf8_general_ci|||
|lzh_report|BASE TABLE|Dynamic|20|1320|9216|68|24||2017-11-07 17:00:41|2017-06-13 16:47:52|MyISAM|utf8_general_ci||运营报告表|
|lzh_scores_goods|BASE TABLE|Compact|6|16384|16384|0|27|||2017-09-11 11:46:16|InnoDB|utf8_general_ci||积分商品表|
|lzh_seo_ad|BASE TABLE|Compact|4|16384|16384|0|5|||2017-11-07 16:24:43|InnoDB|utf8_general_ci||seo?????|
|lzh_seo_aptitude|BASE TABLE|Compact|36|16384|16384|0|52|||2017-11-07 16:24:43|InnoDB|utf8_general_ci||ƽ̨???ʱ|
|lzh_seo_area|BASE TABLE|Dynamic|425|10952|13312|0|426||2017-11-07 16:26:32|2017-11-07 16:24:43|MyISAM|utf8_general_ci||ʡ?е????|
|lzh_seo_baike|BASE TABLE|Compact|36|114688|32768|0|37|||2017-11-07 16:24:43|InnoDB|utf8_general_ci||?ٿƱ|
|lzh_seo_capital|BASE TABLE|Compact|36|16384|16384|0|50|||2017-11-07 16:24:43|InnoDB|utf8_general_ci||ƽ̨?ʽ|
|lzh_seo_news|BASE TABLE|Compact|58|1589248|49152|4194304|87|||2017-11-07 16:24:43|InnoDB|utf8_general_ci||??????Ѷ?|
|lzh_seo_news_cate|BASE TABLE|Compact|10|16384|16384|0|28|||2017-11-07 16:24:43|InnoDB|utf8_general_ci||??Ѷ?????|
|lzh_seo_picture|BASE TABLE|Compact|104|16384|16384|0|106|||2017-11-07 16:24:43|InnoDB|utf8_general_ci|||
|lzh_seo_plat|BASE TABLE|Compact|35|16384|32768|0|61|||2017-11-07 16:24:43|InnoDB|utf8_general_ci||ƽ̨?|
|lzh_seo_pv|BASE TABLE|Compact|31453|2637824|802816|4194304|35890|||2017-11-07 16:24:43|InnoDB|utf8_general_ci||?????|
|lzh_seo_senior|BASE TABLE|Compact|8|16384|16384|0|21|||2017-11-07 16:24:43|InnoDB|utf8_general_ci||ƽ̨?߹ܱ|
|lzh_seo_tag|BASE TABLE|Compact|18|16384|32768|0|65|||2017-11-07 18:01:06|InnoDB|utf8_general_ci||关键字表|
|lzh_shuangdan|BASE TABLE|Compact|309|16384|0|0|335|||2017-05-24 18:11:44|InnoDB|utf8_general_ci|||
|lzh_shuangdan_product|BASE TABLE|Compact|904|81920|0|0|1042|||2017-05-24 18:11:44|InnoDB|utf8_general_ci|||
|lzh_sms_content|BASE TABLE|Compact|31222|4734976|0|4194304|31464|||2017-05-24 18:11:44|InnoDB|utf8_general_ci|||
|lzh_sms_receiver|BASE TABLE|Compact|107315|6832128|17891328|4194304|114030|||2017-05-24 18:11:45|InnoDB|utf8_general_ci|||
|lzh_smsconten|BASE TABLE|Compact|31161|4734976|0|4194304|33707|||2017-05-24 18:11:45|InnoDB|utf8_general_ci|||
|lzh_socus_tb|BASE TABLE|Compact|4010|262144|0|0|104449|||2017-05-24 18:11:45|InnoDB|utf8_general_ci|||
|lzh_sys_tip|BASE TABLE|Dynamic|85|13792|17408|0|||2017-05-24 18:07:24|2017-05-24 18:07:24|MyISAM|utf8_general_ci|||
|lzh_trade_pnr|BASE TABLE|Compact|266976|106594304|18956288|7340032|1000560|||2017-05-24 18:11:45|InnoDB|utf8_general_ci|||
|lzh_utm_source|BASE TABLE|Compact|0|16384|0|0|1|||2017-06-05 17:02:26|InnoDB|utf8_general_ci|||
|lzh_verify|BASE TABLE|Dynamic|113|5152|8192|0|34960|2017-06-16 10:03:17|2017-11-07 16:08:12|2017-06-16 10:03:17|MyISAM|utf8_general_ci|||
|lzh_video_apply|BASE TABLE|Dynamic|26|836|3072|0|27||2017-05-24 18:11:28|2017-05-24 18:11:28|MyISAM|utf8_general_ci|||
|lzh_vip_apply|BASE TABLE|Dynamic|2112|98896|23552|0|2113||2017-07-31 16:49:13|2017-05-24 18:11:28|MyISAM|utf8_general_ci|||
|lzh_wdzj_token|BASE TABLE|Compact|3|16384|0|0||||2017-05-24 18:11:30|InnoDB|utf8_general_ci||网贷之家 - Token表 - 勿删|
|lzh_wzchunjie|BASE TABLE|Dynamic|610|132336|10240|0|810||2017-05-24 18:11:31|2017-05-24 18:11:31|MyISAM|gbk_chinese_ci|||
|lzh_zhuanpan|BASE TABLE|Compact|8|16384|0|0|26|||2017-11-02 15:03:42|InnoDB|utf8_general_ci||用户抽奖次数表|
|lzh_zhuanpan_product|BASE TABLE|Compact|0|16384|0|0|2|||2017-11-03 16:49:37|InnoDB|utf8_general_ci||用户获取奖品表|
