declare function require(r: any): any;
const Koa = require("koa");
const Router = require("koa-router");
const r = new Router;
const app = new Koa;
r.get("/recommend/:category", ctx => {
    //ctx.body = JSON.stringify([ctx.params,ctx.query])
    let res = [];
    let videoDetail = {
        id: 1145141919,
        title: "真夏の夜の银梦 合辑",
        category: "R18",
        views: 893931,
        img: "https://img.moegirl.org/common/b/b8/%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%A4%9C%E3%81%AE%E6%B7%AB%E5%A4%A2.jpg"
    }
    for (let i = 0; i < ctx.query.length; i++)
        res.push(videoDetail);
    ctx.body = JSON.stringify({ code: 200, result: res });
})
r.get("/categories", ctx => {
    let res = [
        { name: "膜蛤", childNodes: null },
        {
            name: "动漫", childNodes: [
                { name: "MMD", childNodes: null },
                { name: "番剧", childNodes: null }
            ]
        },
        { name: "电影", childNodes: null },
        {
            name: "科教", childNodes: [
                { name: "纪录片", childNodes: null }
            ]
        },
        { name: "电视剧", childNodes: null },
        {
            name: "鬼畜", childNodes: [
                { name: "音MAD", childNodes: null }
            ]
        },
        {
            name: "R18", childNodes: [
                { name: "里区", childNodes: null }
            ]
        }
    ];
    ctx.body = JSON.stringify({ code: 200, result: res })
})
r.get("/url/:id", ctx => {
    let res = {
        id: 123456789,
        url: "https://xb2016-my.sharepoint.com/:v:/g/personal/corps_rbq_show/EQTPeztXSR5JiH9Vod-VuGIB1dM-TvqHoDtTb5tH6mX6YQ?e=yr2hCB&download=1"
    };
    ctx.body = JSON.stringify({ code: 200, result: res });
})
app.use(r.routes()).listen(8900);
