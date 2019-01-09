// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 5000,
    appTitle: '数字仪表盘-指数项目',

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    // theme: 'night-blue',
    theme: 'my-themes',
    // clients configs
    api: {
        aws: {
            region: 'eu-west-1'
        },
        jenkins: {
            baseUrl: 'https://my-jenkins.com',
            auth: {
                user:     'me',
                password: 'me'
            }
        },

    },

    // define duration between each dashboard rotation (ms)
    // rotationDuration: 160000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [
                {
                    type: 'iframe.iframe',
                    title: '全国指数项目分布图',
                    // url: 'https://indexmap.herokuapp.com',
                    url: 'http://47.91.179.211:3000',
                    columns: 1, rows: 2,
                    x: 0, y: 0
                },
                {
                  type: 'charts.bar_chart_widget',
                  title:'各省项目数量对比图',
                  columns: 1, rows: 1,
                  // data: [{x: '北京', y: 1},{x: '杭州', y: 4},{x: '温州', y: 1},{x: '金华', y: 2},{x: '绍兴', y: 1},{x: '嘉兴', y: 1},{x: '舟山', y: 1},{x: '台州', y: 1},{x: '成都', y: 1},{x: '临沂', y: 1},{x: '济宁', y: 1},{x: '潍坊', y: 2},{x: '泉州', y: 1}],
                  data: [{x: '北京', y: 1},{x: '浙江', y: 11},{x: '福建', y: 1},{x: '山东', y: 4},{x: '四川', y: 1}],
                  x: 0, y: 2,
                },
                {
                  type: 'switch.widgets',
                  columns: 2, rows: 3,
                  x: 1, y: 0,
                  duration: 10000,
                  widgets: [
                    // {
                    //   type: 'image.image',
                    //   title: '中国·义乌小商品指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/images/www_ywindex_com.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·柯桥纺织指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/images/www_kqindex_cn.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·海宁皮革指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/images/www_hnindex_com.jpg',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·舟山水产品指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/images/www_scpzs_com.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·永康五金指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/images/www_ykindex_com.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·四季青服装指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/images/zs_zjpi_gov_cn_market_index_shijiqin.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·四季青服装指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/images/zs_zjpi_gov_cn_market_index_shijiqin.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '浙江省菜篮子指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/images/zs_zjpi_gov_cn_market_index_cailanzi.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·金恒德汽车用品价格指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/www_jhdindex_com.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·中关村电子信息产品指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/www_zgcindex_org.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·临沂商城价格指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/www_lyscprice_com.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·金乡大蒜指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/www_jxdsi_com.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·寿光蔬菜指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/www_sgvindex_com.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    // {
                    //   type: 'image.image',
                    //   title: '中国·成都中药材指数',
                    //   url: 'https://github.com/7253641/mozaik-demo/raw/demo/www_ysindex_com.png',
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center -7vh',
                    // },
                    {
                      type: 'iframe.iframe',
                      title: '中华人民共和国商务部-商务预报',
                      url: 'http://cif.mofcom.gov.cn/cif/html/indexCenter/index.html?10300'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '国家发改委-价格监测中心',
                      url: 'http://jgjc.ndrc.gov.cn/Detail.aspx?newsId=6390&TId=744'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·义乌小商品指数',
                      url: 'http://www.ywindex.com'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·柯桥纺织指数',
                      url: 'http://www.kqindex.cn'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·海宁皮革指数',
                      url: 'http://www.hnindex.com'
                    },
                    // {
                    //   type: 'iframe.iframe',
                    //   title: '中国·舟山水产品指数',
                    //   url: 'http://www.scpzs.com'
                    // },
                    {
                      type: 'iframe.iframe',
                      title: '中国·永康五金指数',
                      url: 'http://www.ykindex.com'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '永康市循环经济发展指数',
                      url: 'http://115.236.46.126:5000'
                    },
                    // {
                    //   type: 'iframe.iframe',
                    //   title: '永康市统计数据云平台',
                    //   url: 'http://115.236.46.126:8000'
                    // },
                    // {
                    //   type: 'iframe.iframe',
                    //   title: '永康市统计管理云平台',
                    //   url: 'http://115.236.46.126:4000 '
                    // },
                    // {
                    //   type: 'iframe.iframe',
                    //   title: '中国·金恒德汽车用品价格指数',
                    //   url: 'http://www.jhdindex.com'
                    // },
                    {
                      type: 'iframe.iframe',
                      title: '中国·中关村电子信息产品指数',
                      url: 'http://www.zgcindex.org'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·临沂商城价格指数',
                      url: 'http://www.lyscprice.com'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·金乡大蒜指数',
                      url: 'http://www.jxdsi.com'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·寿光蔬菜指数',
                      url: 'http://www.sgvindex.com'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·成都中药材指数',
                      url: 'http://www.ysindex.com',
                    },
                  ]
              },
              {
                type: 'switch.widgets',
                columns: 1, rows: 1,
                x: 3, y: 0,
                duration: 8000,
                widgets: [
                  {
                    type: 'embed.markup',
                    title: '苏为华',
                    fa: 'fa fa-group',
                    content: '<div style="width:95%;margin:10"><p style="text-indent:38px;">经济学博士，教授，博士生导师，浙江工商大学副校长。享受国务院政府特殊津贴，原国内贸易部突出贡献专家，浙江省高校中青年学科带头人，浙江省151人才工程第一层次人选。目前主要从事政府统计体制改革、指数理论与应用、评估理论与方法、数据挖掘与决策等方面的研究工作。</p></div>',
                    // content: '<div style="width:95%;><p style="text-indent:32px;">  经济学博士，教授，博士生导师，浙江工商大学副校长。享受国务院政府特殊津贴，原国内贸易部突出贡献专家，浙江省高校中青年学科带头人，浙江省151人才工程第一层次人选。目前主要从事政府统计体制改革、指数理论与应用、评估理论与方法、数据挖掘与决策等方面的研究工作。</p></div>',
                  },
                  {
                    type: 'embed.markup',
                    title: '陈骥',
                    fa: 'fa fa-group',
                    content: '<div style="width:95%;margin:10"><p style="text-indent:38px;">经济学博士，教授，硕士生导师。教育部人文社会科学重点研究基地——浙江工商大学现代商贸研究中心、浙江省2011协同创新中心——“现代商贸流通体系建设协同创新中心”、浙江财经大学经济与社会发展研究院兼职研究人员。主要从事政府统计制度、商贸流通统计、电子商务统计监测、大数据管理决策等方面的研究。多项成果获教育部及各级统计部门奖励。</p></div>',
                    // content: '<div style="width:95%;><p style="text-indent:32px;">  经济学博士，教授，硕士生导师。教育部人文社会科学重点研究基地——浙江工商大学现代商贸研究中心、浙江省2011协同创新中心——“现代商贸流通体系建设协同创新中心”、浙江财经大学经济与社会发展研究院兼职研究人员。主要从事政府统计制度、商贸流通统计、电子商务统计监测、大数据管理决策等方面的研究。多项成果获教育部及各级统计部门奖励。</p></div>',
                  },
                  {
                    type: 'embed.markup',
                    title: '张涛',
                    fa: 'fa fa-group',
                    content: '<div style="width:95%;margin:10"><p style="text-indent:38px;">软件工程硕士，工程师。曾先后供职于浙大网新科技股份有限公司、杭州信雅达系统工程股份有限公司、UT斯达康（中国）有限公司、中国电力科学研究院软件工程实验室。先后获得过Microsoft Architects 2000、BEA WLS-D、IBM WSBCC、Raytron SDP&M、Cisco CCNP、Cisco ICSG等认证。2003年入选杭州市“131”中青年人才培养计划。</p></div>',
                    // content: '<div style="width:95%;><p style="text-indent:32px;">  软件工程硕士，工程师。曾先后供职于浙大网新科技股份有限公司、杭州信雅达系统工程股份有限公司、UT斯达康（中国）有限公司、中国电力科学研究院软件工程实验室。先后获得过Microsoft Architects 2000、BEA WLS-D、IBM WSBCC、Raytron SDP&M、Cisco CCNP、Cisco ICSG等认证。2003年入选杭州市“131”中青年人才培养计划。</p></div>',
                  },
                ]
              },
              {
                type: 'embed.markup',
                title: '项目案例',
                fa: 'fa fa-link',
                content: '<div><ul> \
                  <li><a href="http://cif.mofcom.gov.cn/cif/html/indexCenter/index.html?10300" target="_blank">中华人民共和国商务部-商务预报</a></li> \
                  <li><a href="http://jgjc.ndrc.gov.cn/Detail.aspx?newsId=6390&TId=744" target="_blank">国家发改委-价格监测中心</a></li> \
                  <li><a href="http://www.ywindex.com" target="_blank">中国·义乌小商品指数</a></li> \
                  <li><a href="http://www.kqindex.cn" target="_blank">中国·柯桥纺织指数</a></li> \
                  <li><a href="http://www.hnindex.com" target="_blank">中国·海宁皮革指数</a></li> \
                  <li><a href="http://www.scpzs.com" target="_blank">中国·舟山水产品指数</a></li> \
                  <li><a href="http://www.ykindex.com" target="_blank">中国·永康五金指数</a></li> \
                  <li><a href="http://115.236.46.126:5000" target="_blank">永康市循环经济发展指数</a></li> \
                  <li><a href="http://115.236.46.126:8000" target="_blank">永康市统计数据云平台</a></li> \
                  <li><a href="http://115.236.46.126:4000" target="_blank">永康市统计管理云平台</a></li> \
                  <li><a href="http://zs.zjpi.gov.cn/market/index/shijiqin" target="_blank">中国·四季青服装指数</a></li> \
                  <li><a href="http://www.jhdindex.com" target="_blank">中国·金恒德汽车用品价格指数</a></li> \
                  <li><a href="http://www.zgcindex.org" target="_blank">中国·中关村电子信息产品指数</a></li> \
                  <li><a href="http://www.lyscprice.com" target="_blank">中国·临沂商城价格指数</a></li> \
                  <li><a href="http://www.jxdsi.com" target="_blank">中国·金乡大蒜指数</a></li> \
                  <li><a href="http://www.sgvindex.com" target="_blank">中国·寿光蔬菜指数</a></li> \
                  <li><a href="http://www.ysindex.com" target="_blank">中国·成都中药材指数</a></li> \
                  <li><a>中国·昌邑生姜指数</a></li> \
                  <li><a>中国·水头石材指数</a></li> \
                  <li><a>泰隆银行小微企业指数</a></li> \
                  <li><a>杭州市科委发展指数</a></li> \
                  </ul></div>',
                  columns: 1, rows: 2,
                  x: 3, y: 1,
              },
            ]
        }
      ]
};

module.exports = config;
