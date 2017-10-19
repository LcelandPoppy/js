-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 10 月 18 日 09:03
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `123456`
--
CREATE DATABASE `123456` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `123456`;

-- --------------------------------------------------------

--
-- 表的结构 `baokuan`
--

CREATE TABLE IF NOT EXISTS `baokuan` (
  `sid` tinyint(255) NOT NULL,
  `src` varchar(255) CHARACTER SET utf8 NOT NULL,
  `zhekou` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` varchar(255) CHARACTER SET utf8 NOT NULL,
  `yuanjia` varchar(255) CHARACTER SET utf8 NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `baokuan`
--

INSERT INTO `baokuan` (`sid`, `src`, `zhekou`, `price`, `yuanjia`, `title`) VALUES
(1, 'http://a.vpimg2.com/upload/merchandise/pdc/922/248/798057870423248922/2/6926799600525-110.jpg', '10.0折', '78.0', '¥ 78.0', '姬芮新能真皙美白隔离霜'),
(2, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/05/04/74/6dfc762d-473d-4e27-b8ee-27e00864e4f5.jpg', '2.9折', '49.0', '¥ 168.0', 'LarastyleLara Style水感亲肤散粉（小伊限量版）象牙白'),
(3, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/08/30/128/c92f489354ed4b29865a80b222b06084-110.jpg', '9.5折', '173.0', '¥ 183.0', '花印水漾润颜补水乳液150ml'),
(4, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/05/05/133/b6a5af80d3e64713a31fe27e2299622b-110.jpg', '7.8折', '109.0', '¥ 140.0', '玉兰油多效修护醒肤水150ml'),
(5, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/05/08/125/03ede0ff-39d6-4343-bd41-61a030acef1c.jpg', '10.0折', '32.0', '¥ 32.0', '卡姿兰卡姿兰(Carslan)双效眉粉01# 3.6g'),
(6, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/05/03/76/dc434d6a0e10451fae108957e246cbfa-110.jpg', '5.0折', '99.0', '¥ 198.0', '法兰琳卡透亮保湿面贴膜25ml 10片'),
(7, 'http://a.vpimg2.com/upload/merchandise/pdc/696/333/950335753938333696/2/4909978610180-110.jpg', '10.0折', '108.0', '¥ 108.0', '资生堂资生堂丝蓓绮炫魅赋活洗发露550ml'),
(8, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/07/07/184/333e97a7-2a3d-427a-96eb-22b0b8cd43a8.jpg', '2.9折', '49.0', '¥ 168.0', '佩佩佩佩双头立体修容遮瑕高光棒'),
(9, 'http://a.vpimg2.com/upload/merchandise/pdc/497/487/879404137927487497/0/6922829568872-110.jpg', '8.6折', '25.0', '¥ 29.0', '雅芳小红裙走珠香水9ml'),
(10, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/03/03/161/b375edb9-c5ee-45e2-87dd-f5245933000b.jpg', '5.0折', '125.0', '¥ 249.0', 'NATUREREPUBLIC济州碳酸卸妆水 510ml'),
(11, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/08/14/173/8d193ba3-70f9-40dd-a5b3-63f8ba5e5c5b.jpg', '4.5折', '199.0', '¥ 438.0', '卡姿兰卡姿兰(Carslan)蜗牛气垫调控霜 01# 丝白色*2（正装14.5g+补充装14.5g）'),
(12, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/03/23/23/8cd2a001d6864198b9d9e6ccba823fa1-110.jpg', '8.0折', '56.0', '¥ 70.0', '曼秀雷敦新碧水薄嫩肤防晒乳液 SPF25 PA++ 80g'),
(13, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/12/12/74/82424836-1788-4c1b-910a-d0ed22065d77.jpg', '2.5折', '99.0', '¥ 398.0', 'LarastyleLara Style女神的魔盒'),
(14, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/09/13/115/426a995d097e4e0fbf95973430eaad93-110.jpg', '9.5折', '183.0', '¥ 193.0', '花印水漾润颜补水眼霜30g'),
(15, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/07/17/73/f393a49f-5ebe-4932-afa4-047ee40579ff.jpg', '1.8折', '59.0', '¥ 320.0', '花肌粹黄瓜玻尿酸补水面膜套组32片'),
(16, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/12/12/168/d6e85191-1c1f-4e67-98b0-90f72db2f639.jpg', '3.0折', '59.0', '¥ 198.0', 'LarastyleLara Style矿物莹透亲颜亮彩腮红(粉嫩系）'),
(17, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/04/07/188/128cf105-a072-4665-93cf-92f2974b9676.jpg', '1.8折', '59.0', '¥ 320.0', '高姿海藻沁透保湿面膜30片'),
(18, 'http://a.vpimg2.com/upload/merchandise/pdc/897/376/7382883534663376897/0/mz-110.jpg', '9.0折', '115.0', '¥ 128.0', '百雀羚水嫩金致保湿精华乳'),
(19, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/09/07/59/27a40c0f-c780-403d-b37a-9854faaeed53.jpg', '5.3折', '45.0', '¥ 85.0', '小蜜坊5合1保湿美唇棒3.5g'),
(20, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/09/18/80/7aad4a5f-98a7-45b5-8ff3-1c4a7f4c4f1b.jpg', '5.8折', '298.0', '¥ 510.0', '卡尔文克莱恩卡尔文克雷恩迷你女士香氛礼盒15ml*4'),
(21, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/11/04/30/86a176b3f6ca4c36a9fa9f8053bc62dc-110.jpg', '8.4折', '59.0', '¥ 70.0', '相宜本草睡眠面膜两件套（绿茶135g+白茶135g）'),
(22, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/07/26/166/d930cfab5fe54048a9232e22a379a2a9-110.jpg', '3.3折', '45.0', '¥ 138.0', 'CYP洁面沐浴按摩球CF3'),
(23, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/09/19/127/a3f3306d8dac473ebcb611dc5263752d-110.jpg', '8.5折', '51.0', '¥ 60.0', '佰草集平衡洁面乳100ml'),
(24, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/07/29/67/4b1ed12e-62d7-4fda-8505-0a4da99b79fe.jpg', '9.9折', '98.0', '¥ 99.0', '相宜本草红景天幼亮修颜乳50g（新老包装随机发货）'),
(25, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/08/15/63/a94503d2782c42378f28abf86976c7bb-110.jpg', '6.0折', '228.0', '¥ 380.0', '贝佳斯矿物营养美肤泥浆面膜（白泥）212g/200ml（补水面膜）'),
(26, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/07/27/111/fb4a6f38-6afe-455e-8c83-09d2c6a57eed.jpg', '7.9折', '124.0', '¥ 156.0', '珀莱雅靓白肌密精华乳液 120ml'),
(27, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/01/18/80/48cd297d-b136-4fe8-a1e9-f6b7facf0658.jpg', '4.2折', '109.0', '¥ 259.0', '锐度男士净油补水保湿套装'),
(28, 'http://a.vpimg2.com/upload/merchandise/pdcvis/603835/2017/0310/52/e64d70ef-f3a7-4d8d-b4bb-3f93f1fd92d7.jpg', '4.7折', '169.0', '¥ 359.0', '美诗美诗孕妇护肤品活泉补水四件套天然补水保湿滋润'),
(29, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/04/24/165/f9981be2c27e49be9b0ed39b7e3eac3e-110.jpg', '3.7折', '65.0', '¥ 175.0', '彼丽芦荟海藻保湿倍水润面膜30片盒装'),
(30, 'http://a.vpimg2.com/upload/merchandise/pdc/677/588/966098344322588677/1/6956497901280-110.jpg', '4.5折', '35.0', '¥ 78.0', 'PF79新银杏果舒颜保湿洁面乳150g'),
(31, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/03/07/153/9fa089a305c74119af906c585b7a6a49-110.jpg', '7.9折', '116.0', '¥ 146.0', '珀莱雅靓白肌密清透雪肤水 150ml'),
(32, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/05/25/73/35ee05e3-13f7-4842-8d7c-272418ecf7a3.jpg', '6.3折', '145.0', '¥ 230.0', '阿芙焕白亮采调理液 120ml'),
(33, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/09/08/69/3311e769-82d5-407d-8c26-b405d8f84cd3.jpg', '7.6折', '128.0', '¥ 169.0', '嘉媚乐丰盈美胸精油 15ml 无'),
(34, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/09/12/28/f37ad037-c7c5-4d25-bc65-434ea0404d39.jpg', '6.0折', '53.0', '¥ 89.0', '春纪梅子绿茶保湿美肌水160ml'),
(35, 'http://a.vpimg2.com/upload/merchandise/pdc/928/756/2035140402277756928/1/6956497901877-110.jpg', '2.2折', '39.0', '¥ 178.0', 'PF79羞色气垫腮红 桃花粉10g'),
(36, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/05/28/165/69b29af37b994073a891afdf44d1c448-110.jpg', '5.1折', '248.0', '¥ 486.0', '贝德玛润妍水润亮采套装'),
(37, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/01/10/104/d8baa306d74c48cda1b8b85544db51e3-110.jpg', '7.3折', '138.0', '¥ 190.0', '自然堂雪润皙白深澈精华液 40ml'),
(38, 'http://a.vpimg2.com/upload/merchandise/pdc/216/833/76919059709833216/1/8808033127471-110.jpg', '5.8折', '69.0', '¥ 119.0', '所望韩国SOMANG植物活力滋养护发素 500ml'),
(39, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/10/27/9/ecc04c16-6ef2-4a0e-949d-a7c7eee0b83a.jpg', '7.2折', '199.0', '¥ 276.0', '相宜本草芯净自然护肤套装（两用乳130g+保湿水200ml+保湿乳120g+喷雾155ml）'),
(40, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/12/01/142/f6453a63-5182-4d52-8973-ccf4340b04d8.jpg', '5.0折', '199.0', '¥ 396.0', '阿芙清爽补水保湿精油面膜 24片【口碑回购款】（bad girl限量版）'),
(41, 'http://a.vpimg2.com/upload/merchandise/pdc/572/464/4912019818589464572/1/mz-110.jpg', '9.4折', '139.0', '¥ 148.0', '韩后茶蕊嫩白液110ml'),
(42, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/12/21/125/b73499d5-a4f9-4549-9c01-ac9239761ce7.jpg', '3.5折', '28.0', '¥ 79.0', '自然奇迹小洋装 英式百变三件组甲油（1-芭比粉色系）3*4.5ml'),
(43, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/08/11/48/21d977e593994fee90073a2f317ac54a-110.jpg', '5.0折', '139.0', '¥ 278.0', '俏十岁调理滋养精华面膜25ml/5p 粉色'),
(44, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/06/13/175/9db4a688cd7e49f5b9286c5ce1c336c5-110.jpg', '5.9折', '45.0', '¥ 76.0', '京润珍珠珍珠层粉100g'),
(45, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/07/26/161/edbf9768-32ee-4ef2-a56b-f10fc3bc3887.jpg', '8.0折', '159.0', '¥ 198.0', '雅漾舒润柔肤水'),
(46, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/09/05/126/78e50216bed64ac7873960b791be476a-110.jpg', '3.6折', '230.0', '¥ 634.0', '欧莱雅小美盒欧莱雅集团小美盒 秋季保湿盒 兰蔻/YSL圣罗兰/植村秀/科颜氏 旅行套装'),
(47, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/04/07/100/6dacc66ccb7746589c8db64b40c26859-110.jpg', '7.0折', '88.0', '¥ 125.0', '雅漾舒护活泉喷雾150ml'),
(48, 'http://a.vpimg2.com/upload/merchandise/pdc/880/394/3909763772342394880/3/6957475214187-110.jpg', '6.8折', '168.0', '¥ 248.0', '静佳植物菁萃眼部精华油15ml'),
(49, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/09/19/147/a86a88e50a604928843caa30f4e4487f-110.jpg', '5.9折', '129.0', '¥ 219.0', '韩束水嫩亮颜臻享套组'),
(50, 'http://a.vpimg2.com/upload/merchandise/pdc/688/562/1012260304680562688/1/6902088308334-110.jpg', '5.9折', '37.0', '¥ 63.0', '多芬多芬清透水润沐浴乳1000g'),
(51, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/03/10/66/285d2d88-9320-4990-ad7e-d88a5e3a4314.jpg', '4.2折', '168.0', '¥ 404.0', '珍珂儿日本蛋清米酵素清透平衡三件套（升级版）'),
(52, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/10/11/163/30cddd81f99e423f928f16f3fd1000f1-110.jpg', '4.9折', '259.0', '¥ 524.0', '欧诗漫珍珠亮采焕颜青春礼盒'),
(53, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/04/14/124/7c833e0bf01b4b6f88283843c3250dff-110.jpg', '3.5折', '35.0', '¥ 99.0', '活泉立体塑颜精华洁面乳'),
(54, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/12/06/149/bf2f1ec5-bd85-48dc-9609-292d96d2a3d7.jpg', '8.3折', '48.0', '¥ 58.0', '珍珂儿澳洲山羊奶补水润肌洁面乳(新升级) 100g'),
(55, 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/05/05/57/3a7a7288-790f-42b1-b155-fc2807c39ac3.jpg', '7.6折', '280.0', '¥ 369.0', '芙丽芳丝纯白凝皙夜用焕肤霜');

-- --------------------------------------------------------

--
-- 表的结构 `dayly`
--

CREATE TABLE IF NOT EXISTS `dayly` (
  `sid` tinyint(4) NOT NULL,
  `src` varchar(255) CHARACTER SET utf8 NOT NULL,
  `zhekou` varchar(255) CHARACTER SET utf8 NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `soruce` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `dayly`
--

INSERT INTO `dayly` (`sid`, `src`, `zhekou`, `title`, `soruce`) VALUES
(1, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/0/hhc1507789951994xcx4.jpg', '3.4折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '特卖-玉兰油            '),
(2, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/10/hhc1507789931149aj7y.jpg', '1.2折起', '满199减50 上不封顶', '相宜本草乐蜂运营专场'),
(3, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/65/hhc1507619193890b8j9.jpg', '3.6折起', '跨品牌满199减100 上不封顶', '珀莱雅乐蜂运营专场'),
(4, 'http://b.appsimg.com/upload/hhcapps/2017/10/13/0/hhc15078615436870ojr.jpg', '3.7折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '珀莱雅乐蜂运营专场'),
(5, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/13/hhc1507621096740o40s.jpg', '1.2折起', '满199减50 上不封顶', '相宜本草乐蜂运营专场'),
(6, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/174/hhc1507781924450vszr.jpg', '3.9折起', '跨品牌满199减100 上不封顶', '珀莱雅乐蜂运营专场'),
(7, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/176/hhc1507782171340n59r.jpg', '3.10折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '相宜本草乐蜂运营专场'),
(8, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/109/hhc15076003503581eyr.jpg', '1.2折起', '跨品牌满199减100 上不封顶', '相宜本草乐蜂运营专场'),
(9, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/134/hhc1507781703324qcnn.jpg', '3.12折起', '跨品牌满199减100 上不封顶', '珀莱雅乐蜂运营专场'),
(10, 'http://b.appsimg.com/upload/hhcapps/2017/10/09/173/hhc15075411869293i66.jpg', '3.13折起', '满199减50 上不封顶', '相宜本草乐蜂运营专场'),
(11, 'http://b.appsimg.com/upload/hhcapps/2017/10/09/11/hhc1507542736871afb0.jpg', '3.14折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '相宜本草乐蜂运营专场'),
(12, 'http://b.appsimg.com/upload/hhcapps/2017/10/09/148/hhc1507541980946eojm.jpg', '3.15折起', '跨品牌满199减100 上不封顶', '珀莱雅乐蜂运营专场'),
(13, 'http://b.appsimg.com/2017/08/28/2783/1503901189878.jpg', '3.16折起', '满199减50 上不封顶', '相宜本草乐蜂运营专场'),
(14, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/135/hhc150762923220310su.jpg', '3.17折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '相宜本草乐蜂运营专场'),
(15, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/41/hhc1507781939453uzrr.jpg', '3.18折起', '满199减50 上不封顶', '珀莱雅乐蜂运营专场'),
(16, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/37/hhc1507781661800y44s.jpg', '3.19折起', '跨品牌满199减100 上不封顶', '相宜本草乐蜂运营专场'),
(17, 'http://b.appsimg.com/upload/hhcapps/2017/10/13/122/hhc1507862351840jxhh.jpg', '3.20折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '珀莱雅乐蜂运营专场'),
(18, 'http://b.appsimg.com/upload/hhcapps/2017/10/13/198/hhc15078623420512hqe.jpg', '3.21折起', '跨品牌满199减100 上不封顶', '相宜本草乐蜂运营专场'),
(19, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/125/hhc15076182337357kkj.jpg', '3.22折起', '满199减50 上不封顶', '珀莱雅乐蜂运营专场'),
(20, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/85/hhc1507621898948czrg.jpg', '3.23折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '相宜本草乐蜂运营专场'),
(21, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/0/hhc1507789951994xcx4.jpg', '3.4折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '特卖-玉兰油            '),
(22, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/10/hhc1507789931149aj7y.jpg', '1.2折起', '满199减50 上不封顶', '相宜本草乐蜂运营专场'),
(23, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/65/hhc1507619193890b8j9.jpg', '3.6折起', '跨品牌满199减100 上不封顶', '珀莱雅乐蜂运营专场'),
(24, 'http://b.appsimg.com/upload/hhcapps/2017/10/13/0/hhc15078615436870ojr.jpg', '3.7折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '珀莱雅乐蜂运营专场'),
(25, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/13/hhc1507621096740o40s.jpg', '1.2折起', '满199减50 上不封顶', '相宜本草乐蜂运营专场'),
(26, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/174/hhc1507781924450vszr.jpg', '3.9折起', '跨品牌满199减100 上不封顶', '珀莱雅乐蜂运营专场'),
(27, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/176/hhc1507782171340n59r.jpg', '3.10折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '相宜本草乐蜂运营专场'),
(28, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/109/hhc15076003503581eyr.jpg', '1.2折起', '跨品牌满199减100 上不封顶', '相宜本草乐蜂运营专场'),
(29, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/134/hhc1507781703324qcnn.jpg', '3.12折起', '跨品牌满199减100 上不封顶', '珀莱雅乐蜂运营专场'),
(30, 'http://b.appsimg.com/upload/hhcapps/2017/10/09/173/hhc15075411869293i66.jpg', '3.13折起', '满199减50 上不封顶', '相宜本草乐蜂运营专场'),
(31, 'http://b.appsimg.com/upload/hhcapps/2017/10/09/11/hhc1507542736871afb0.jpg', '3.14折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '相宜本草乐蜂运营专场'),
(32, 'http://b.appsimg.com/upload/hhcapps/2017/10/09/148/hhc1507541980946eojm.jpg', '3.15折起', '跨品牌满199减100 上不封顶', '珀莱雅乐蜂运营专场'),
(33, 'http://b.appsimg.com/2017/08/28/2783/1503901189878.jpg', '3.16折起', '满199减50 上不封顶', '相宜本草乐蜂运营专场'),
(34, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/135/hhc150762923220310su.jpg', '3.17折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '相宜本草乐蜂运营专场'),
(35, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/41/hhc1507781939453uzrr.jpg', '3.18折起', '满199减50 上不封顶', '珀莱雅乐蜂运营专场'),
(36, 'http://b.appsimg.com/upload/hhcapps/2017/10/12/37/hhc1507781661800y44s.jpg', '3.19折起', '跨品牌满199减100 上不封顶', '相宜本草乐蜂运营专场'),
(37, 'http://b.appsimg.com/upload/hhcapps/2017/10/13/122/hhc1507862351840jxhh.jpg', '3.20折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '珀莱雅乐蜂运营专场'),
(38, 'http://b.appsimg.com/upload/hhcapps/2017/10/13/198/hhc15078623420512hqe.jpg', '3.21折起', '跨品牌满199减100 上不封顶', '相宜本草乐蜂运营专场'),
(39, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/125/hhc15076182337357kkj.jpg', '3.22折起', '满199减50 上不封顶', '珀莱雅乐蜂运营专场'),
(40, 'http://b.appsimg.com/upload/hhcapps/2017/10/10/85/hhc1507621898948czrg.jpg', '3.23折起', '满159赠补水面膜贴满199赠VC素颜霜 数量有限赠完为止', '相宜本草乐蜂运营专场');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `sid` tinyint(10) NOT NULL AUTO_INCREMENT,
  `tel` varchar(35) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`sid`, `tel`, `password`) VALUES
(5, '18419950801', '25f9e794323b453885f5181f1b624d0b');
