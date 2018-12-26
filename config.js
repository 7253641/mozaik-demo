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
    theme: 'night-blue',

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
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 160000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [
                // {
                //     type: 'github.user_badge',
                //     user: 'plouc',
                //     columns: 1, rows: 1,
                //     x: 0, y: 0
                // },
                {
                    type: 'iframe.iframe',
                    title: '全国指数项目分布图',
                    url: 'https://indexmap.herokuapp.com',
                    columns: 2, rows: 3,
                    x: 0, y: 0
                },
                {
                  type: 'switch.widgets',
                  columns: 2, rows: 2,
                  x: 2, y: 0,
                  duration: 8000,
                  widgets: [
                    {
                      type: 'iframe.iframe',
                      title: '中国·义乌小商品指数',
                      url: 'www.ywindex.com/cisweb/'
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·柯桥纺织指数',
                      url: 'http://zs.zjpi.gov.cn/market/index/keqiao',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·海宁皮革指数',
                      url: 'http://www.hnindex.com',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·舟山水产品指数',
                      url: 'http://www.scpzs.com/',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·永康五金指数',
                      url: 'http://www.ykindex.com',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·四季青服装指数',
                      url: 'zs.zjpi.gov.cn/market/index/shijiqin',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·金恒德汽车用品价格指数',
                      url: 'http://www.jhdindex.com',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '浙江省菜篮子指数',
                      url: 'zs.zjpi.gov.cn/market/index/cailanzi',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·中关村电子信息产品指数',
                      url: 'http://www.zgcindex.org',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·临沂商城价格指数',
                      url: 'http://www.lyscprice.com',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·金乡大蒜指数',
                      url: 'http://www.jxdsi.com',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·寿光蔬菜指数',
                      url: 'http://www.sgvindex.com',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·昌邑生姜指数',
                      url: '',
                    },
                    {
                      type: 'iframe.iframe',
                      title: '中国·成都中药材指数',
                      url: 'http://www.ysindex.com',
                    }
                  ]



              },
                // {
                //   type: 'image',
                //   url: 'https://picsum.photos/200/300/?random',
                //   columns: 1, rows: 1,
                //   x: 0, y: 0
                // },
            //   {
            //     type: 'mozaik.inspector',
            //     columns: 1, rows: 1,
            //     x: 0, y: 0,
            // },
                // {
                //     type: 'github.repository_contributors_stats',
                //     repository: 'plouc/mozaik',
                //     columns: 1, rows: 1,
                //     x: 2, y: 0
                // },
                // {
                //     type: 'travis.repository',
                //     owner: 'plouc',
                //     repository: 'mozaik',
                //     columns: 1, rows: 1,
                //     x: 1, y: 0
                // },
                // {
                //     type: 'travis.build_histogram',
                //     owner: 'plouc',
                //     repository: 'mozaik',
                //     columns: 2, rows: 1,
                //     x: 1, y: 1
                // },
                {
                    type: 'time.clock',
                    columns: 1, rows: 1,
                    x: 3, y: 0
                },
                // {
                //     type: 'travis.repository',
                //     owner: 'plouc',
                //     repository: 'mozaik-demo',
                //     columns: 1, rows: 1,
                //     x: 0, y: 1
                // },
                // {
                //     type: 'travis.build_history',
                //     owner: 'plouc',
                //     repository: 'mozaik',
                //     columns: 1, rows: 2,
                //     x: 3, y: 1
                // },
                // {
                //     type: 'travis.build_histogram',
                //     owner: 'plouc',
                //     repository: 'go-gitlab-client',
                //     columns: 2, rows: 1,
                //     x: 1, y: 2
                // },
                // {
                //     type: 'github.status',
                //     columns: 1, rows: 1,
                //     x: 0, y: 2
                // }
            ]
        },

        // second dashboard
        {
            // 3 x 2 dashboard
            columns: 3,
            rows:    2,
            widgets: [
                {
                    type: 'travis.build_history',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 2,
                    x: 0, y: 0
                },
                {
                    type: 'github.user_badge',
                    user: 'plouc',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'travis.repository',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'travis.build_histogram',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                }
            ]
        }
    ]
};

module.exports = config;
