declare function require(r: any): any;
const Koa = require("koa");
const Router = require("koa-router");
const r = new Router;
const app = new Koa;
r.get("/recommend/:category", ctx => {
    //ctx.body = JSON.stringify([ctx.params,ctx.query])
    let res = [];
    let videoDetail = videoDetailCreator();
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
r.get("/detail/:id", ctx => {
    let res = {
        url: "https://xb2016-my.sharepoint.com/:v:/g/personal/corps_rbq_show/EQTPeztXSR5JiH9Vod-VuGIB1dM-TvqHoDtTb5tH6mX6YQ?e=yr2hCB&download=1",
        ...videoDetailCreator()
    };
    ctx.body = JSON.stringify({ code: 200, result: res });
})
app.use(r.routes()).listen(8900);

function videoDetailCreator() {
    return {
        id: 1000111101,
        title: "末日时在做什么？有没有空？ #12",
        category: "番剧",
        views: (10 * Math.random()) ** (Math.random() * 10) >> 0,
        img: "https://i.loli.net/2018/08/07/5b6951d44bdf3.png"
    };
}
