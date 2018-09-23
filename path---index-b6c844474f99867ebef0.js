webpackJsonp([0x81b8806e4260],{512:function(A,e){A.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"At some point when I was developing  my new homepage  I ran into an issue with GitHub Pages. What I wanted, was to follow security best practices, and serve  OWASP recommended Security Headers . Unfortunatelly, it looks like  GitHub Pages does not…",frontmatter:{id:"bc6b6976-bf96-431d-bf56-81d34082cb6e",title:"Custom HTTP headers with GitHub pages",author:"Igor Rzegocki",path:"/blog/custom-http-headers-with-github-pages",date:"September 14, 2018",cover:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9AH3u5Hvu5H/u5bP07s/49LT07oDs53nt7IDu5oHu5IHu5Yfu5Zzx6qby7Kby7JDv54Tv5orw54rw54bv5gCk8eus8uzO9/P////+//7////X9+C28amI7d+B7eaD7uWA7uR97uR87eR87eR/7uV67ORz6+Fx6+J17OMA/f7/////////9/f45ejm7vHz///z/P+DmvbSf/Luge/mg/PphfTqhvXrhfHpgfHnmvfuzf341P76rPXvAPj57bWZkOv64tLVyHNaV5yIi+fn7dDY1JLQzHnRzI7l337RzX3PzH3MyYre2Y/f28DV1+Dc4N/c3/X29gCV0lqITDS1mVSbk06dqrGTooeGpIt0ma5skqRwna1/t7l2napuk6BwlaOWsrmZsbpqjp11napvlaLM09kASI84ojQ9/j9Imy8wvTM9jmcqSZxzSn6qcn56cYeEmr+7YZKtU4WeQHKOlKu0mbO+S4KfVoWeSHeNn9B+AE+KNk8cIHEsJmUwK4s6OnJCJkF4a0h1lXp5cG16blV1U1aBmFd9kmyNo2J6b15+dFyEn092jERqgVaNOABqUzExMDAfLypMOTFfOz9ehDhJXSdDMiQ9QSs5MiZbdSM8NCFDPiRAMSZJUiFKXCE0KB49PSM3Jh5FfzAAY8dEYLFHYrRIX7I/Zpo8athEarlBaKI7cq49dqw9lNxJfrE/hLhBe609jMlFj89GeKs+fbY/c6g9bMZBAF7MQ13PQF3OQFzOQlvSQl3HQWDOQmLUQ2PSQmfVQmXPQnbeRYPkR5HtSZruSaX0S6/+Tav6TKr7TaTxSwBdx0NcxUFcxkFcxkFcxUFbx0FbxUFbxUFaxUFZxEFaxUFWw0BVwkBYwkBbxUBpzkGB2kWX5kmg60qg7EpzS4Msh14M9QAAAABJRU5ErkJggg==",aspectRatio:1.7824194952132288,src:"/static/custom-http-headers-with-github-pages-02d8addacd9e5ff1b080341d8fe175e7-8cfe2.png",srcSet:"/static/custom-http-headers-with-github-pages-02d8addacd9e5ff1b080341d8fe175e7-130b9.png 250w,\n/static/custom-http-headers-with-github-pages-02d8addacd9e5ff1b080341d8fe175e7-489bc.png 500w,\n/static/custom-http-headers-with-github-pages-02d8addacd9e5ff1b080341d8fe175e7-8cfe2.png 1000w,\n/static/custom-http-headers-with-github-pages-02d8addacd9e5ff1b080341d8fe175e7-ba8eb.png 1500w,\n/static/custom-http-headers-with-github-pages-02d8addacd9e5ff1b080341d8fe175e7-7ca68.png 2000w,\n/static/custom-http-headers-with-github-pages-02d8addacd9e5ff1b080341d8fe175e7-be5ee.png 2048w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"While developing my  new replacement  of  self-hosted-mailserver ,\nI noticed a funny problem - I couldn't make gnupg2 to work\nwith docker non-interactively. At first, the problem was with an import: You may notice   error. This one was actually easy…",frontmatter:{id:"f4cf8477-a1cf-4749-a8e9-a519eeba2d34",title:"How to make gnupg2 to fall in love with Docker",author:"Igor Rzegocki",path:"/blog/how-to-make-gnupg2-to-fall-in-love-with-docker",date:"April 03, 2017",cover:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACgklEQVQoz6VSW0tUURT+9pkbM+qMZ3TOOTOJkmiOUmppdKMYpTJCEVJiMrB8KMqiJEvJJB/EIGMoRDQfBsuZOXOOM3Mcx+ximEk+RNmNqEjC0C4QQf4E20frwctD0OJ7WOy1vvXt9e0NicMqEIjIwm+C3wiayHZG4snKttWYPAmYoWSzj6t3jdcUR/P4QAL+jUw1LRh2OT/Gbsw8V2ZfxKZHex+WFdBxssCsTg5SNbtWFDSSTRV5e+vKzOTQ9ITyabz/6+v7M8Pd4TRDMFktiTyzgsyRAQtCHCNaoeQkTT2SPk/e+zJ599e70bn3Yz9fxoa3pPotEB062UabQWWo3gLZBnmNvqWkrCsrJWSF5NBOxXq+fXgy++yO1Nna1d78fUIOZ5plFhEr6cjgREGrWBC2Qp0xaMaZ0sNVlbV7K87RgpyAMbfLXbn/iLv8cv3xTXnZr+rckhG37YYDFQd31NT2OuJatxV2ZqrbMuFElJy4Vld/takjJDkFL4uGeIYn5Jir4ObZarPJWBGn8dp1209e5DyhjDbv1ob2otqmtvVrIfPoY/Fm5MHc/PyFpz+uZ6YGrDhq1gCk2MDs1oJGvYUEOFJ6qjHXN0Y8sbTzHk+6EGGhbk89GC/fGTxU2eza43UYBzm0sNATbNRjn4kxMcTPkUgSoqmmnqLCS/nOPt4QteKvYRx8ZgQToCSq5oV4dCfDRJCuQ1U8cvSI8hCpwzbSb8GAdfHB1D+DAKeC2ibatX5BS3M/hwiP02aUGNHGYrMBCg+f2kb8gsbHM/QiiywM8ssxwGNEUGmNiejnsEGPPhuGFs6jS4F8/XLQ7lw9UjRI0yJLBwP5k6zTwbkU/xW/AawM8NR3aso5AAAAAElFTkSuQmCC",aspectRatio:1.3333333333333333,src:"/static/how-to-make-gnupg2-to-fall-in-love-with-docker-5ac8051d451821323f3575d470e2fa8d-8cfe2.png",srcSet:"/static/how-to-make-gnupg2-to-fall-in-love-with-docker-5ac8051d451821323f3575d470e2fa8d-130b9.png 250w,\n/static/how-to-make-gnupg2-to-fall-in-love-with-docker-5ac8051d451821323f3575d470e2fa8d-489bc.png 500w,\n/static/how-to-make-gnupg2-to-fall-in-love-with-docker-5ac8051d451821323f3575d470e2fa8d-8cfe2.png 1000w,\n/static/how-to-make-gnupg2-to-fall-in-love-with-docker-5ac8051d451821323f3575d470e2fa8d-eb1d2.png 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"Last year I wrote an  article about installing custom linux distro on Raspberry Pi 2 .\nSince then I configured it as my personal cloud, with  email daemon ,\n dropbox alternative ,  webmail ,\n backup system  and some other tools. However it appeared…",frontmatter:{id:"a306aa91-c90e-4cdb-a411-1245ac18cdad",title:"Build Your Own Cloud Fast, Thanks to Ansible and Automation",author:"Igor Rzegocki",path:"/blog/build-your-own-cloud-fast-thanks-to-ansible-and-automation",date:"May 22, 2016",cover:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACY0lEQVQoz51TW0/UQBjdPwe+6au/wsT4qvHNqDHGF+MtEJREgYCrVMXFhe2FbjvbTmem7fY+nd63rLLwIE+8WBYBL/hicjKZmeSc833fnGnhrPhvtP44oymO92mOigoVo98uLybnVbOSrHCKYzQblJeWH9iej4uKpBlOM3QxmaVmSK28BCxfdYp3bmGkBSkr0h+AbQGmWS8eb9HdQfJT9JyMRrs2AObD+zBJ3gbVle7u1c180/LsqiLQErdF3o6ORmty7nHBZOAMSZzirDx3JkkG+oquwTAM3gj6ox7qGtjIih1RWm+3JSdwPaAHnkQrIMsG19YbSppPndOcVLXS1550wFMlobYLhd6AJvW3vZmZmdlLs+PJRPYop1ucQUw/VAkR3ACXo2airUbDrPeYytX63TvaeBkwLPH9kI729h8/n3+2sHhweIhYFWVQh68/IXfAGNAhHjqkHLWaOeEkNQyUEfw9YzaEy7IuDV3JdzVGkI9FL7TKYiU+eKDlkmGolBGeV7pdWFTHPetxorB0248+G0TE0o6DRUevuduThRu6+x6Ysm25qqJyGpYdj0cExImWZA2r1ZSOq9oeOvbGR8Gjvice7dO+0Vltz8+9uPeVXOvwH8Y3bx1ev7wjrMvLa8Ak6Gxg04SUhDIVADViJCLQ5GWsSe7malom7lxP7YhLK1sv5zcUwIOBaNpoyvw1YSUua5Q0MSrVkMpB4pAlrL2CxpKAQK/pCJvN+8l+CCIKWfpXtk/1zLxstDVW9oj1BSJx6AEv0GmsNMwwgkn6z49xBjItR6OxHrPG6qRU49TgBD8AeOHjk0eAmwkAAAAASUVORK5CYII=",aspectRatio:1.3333333333333333,src:"/static/build-your-own-cloud-fast-thanks-to-ansible-and-automation-e2c1afa375eac19e00705b12667cd199-8cfe2.png",srcSet:"/static/build-your-own-cloud-fast-thanks-to-ansible-and-automation-e2c1afa375eac19e00705b12667cd199-130b9.png 250w,\n/static/build-your-own-cloud-fast-thanks-to-ansible-and-automation-e2c1afa375eac19e00705b12667cd199-489bc.png 500w,\n/static/build-your-own-cloud-fast-thanks-to-ansible-and-automation-e2c1afa375eac19e00705b12667cd199-8cfe2.png 1000w,\n/static/build-your-own-cloud-fast-thanks-to-ansible-and-automation-e2c1afa375eac19e00705b12667cd199-eb1d2.png 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"I am big fan of TV series. There were times (mostly in college), when I watched them almost continuously. Recently I got tired of laptop screen, and moved to  something bigger . I also had a spare Raspberry PI, so naturally the conslusion came - why…",frontmatter:{id:"97a11075-4624-46b6-a691-5e1f5d828c77",title:"Turn your Raspberry Pi to powerful HTPC with OSMC",author:"Igor Rzegocki",path:"/blog/turn-your-raspberry-pi-to-powerful-htpc-with-osmc",date:"December 10, 2015",cover:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACiElEQVQozz3P7U8SARwH8Juz5QyJ5OCeOFBfNJkQ8nSABpRPqWiJhcLxcJegQCTDLLVVmpDQGRaJ+VC0sEHTTeTQptPWetH6vzpna/vu++7z/e0HiJhfYPq3KPNHvPxTuHgMvjrhTxaq76Sq7MsXhlKXbAlh1yxifSDueozcetpo9Tdax6RGL6Jx1reHANHiiXjxFFw6FSaOLs/s8R/t1Pm2Lg6magbiNbZkbe9LQecUZg2j1gjc/aTB4scJElOPoupRqNUFiBM/BIkTKHXkz30fSu+jsQLPvVnVnzaErOZoiymisAT1kDEss4xLzRPcTYmOxPVujGuNExAmjpuZw+n84cru4d1sRRotgFSu2vlZPnjPpxLdVyHanhugJYpbg01tdKOJkpkoicEDaZ2Y1glAS5WO7IF59QBbYgXTO8JAXhws1Lk3eoWmeFVLslpp56uxNlpmpGQGCjf4EPUIpLRDymGuAZBhBekKj2GvxEuCF3ui2DfJ+DbmyjoEinhtM8NT0nw5rHWhBgrWuTG9B+HS6oAVQzCHRW9ZJFOGM+X6TEWWKvXMfO2L5HT0ZmdbMMKTx+oUmqt9oIESazlJSggvSlDcEKJxwcphAF0rSz6wXKuW9xzPip7nRd9s3kFnOkYYY0dMahoTGGmxloR0LhnhRgnfv3BeSwJotoxvVbBPZVtyd3xu2x9dDwVWaC9z2z5/3TYjvxmG9R5QeyZlhOc/RjQkdG0EgN/vS7bYlm12erWYjKYXwsz8w/RcIOnon+zqnpBb/IiRwgl3A+HGz7HeC7U6OXmGwXclea5MFve/lNj8m49rU6/X51Y2Agvz/eGB3hCHpWa6qd0n05P42cM+WDV6Lrn8BRgL1HDSd7wOAAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-8cfe2.png",srcSet:"/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-130b9.png 250w,\n/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-489bc.png 500w,\n/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-8cfe2.png 1000w,\n/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-ba8eb.png 1500w,\n/static/turn-your-raspberry-pi-to-powerful-htpc-with-osmc-ccbd2a49ade48b73977f00b18c194c85-60abc.png 1920w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"Few days ago,  I gave myself a present , which (at the very beginning) I was planning to power\nup with  OSMC  and use it as HTPC. However, in a meantime I had to switch my apartment, and put\nmy worn ATOM server offline for couple of hours - necessity…",frontmatter:{id:"0a723566-c7b4-4ddf-b1db-f60c15f39bc0",title:"Installing custom Linux on Raspberry Pi 2",author:"Igor Rzegocki",path:"/blog/installing-custom-linux-on-raspberry-pi-2",date:"April 19, 2015",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABPjsjzSyI/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAERIDEyH/2gAIAQEAAQUCx4QZhZVB+La9Cz//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgMAAwAAAAAAAAAAAAAAAAECETEhUXH/2gAIAQEABj8CtRvwhJ8RZpXYk5Zhp//EABsQAQACAgMAAAAAAAAAAAAAAAEAETFBIWGB/9oACAEBAAE/IbjRTUDod2N+EbIeMo7BS8ED2Z//2gAMAwEAAgADAAAAENTP/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAEDAQE/ENpX/8QAFREBAQAAAAAAAAAAAAAAAAAAEQD/2gAIAQIBAT8QCL//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhYTFBgVH/2gAIAQEAAT8QrczaFpt+EyxssBgeM7iUieywkJKd4j03JeBt3Dqd6f/Z",aspectRatio:1.3333333333333333,src:"/static/installing-custom-linux-on-raspberry-pi-2-e767b6d27674acf40393e80f07e70539-75c44.jpg",srcSet:"/static/installing-custom-linux-on-raspberry-pi-2-e767b6d27674acf40393e80f07e70539-d1f5d.jpg 250w,\n/static/installing-custom-linux-on-raspberry-pi-2-e767b6d27674acf40393e80f07e70539-6d1fa.jpg 500w,\n/static/installing-custom-linux-on-raspberry-pi-2-e767b6d27674acf40393e80f07e70539-75c44.jpg 1000w,\n/static/installing-custom-linux-on-raspberry-pi-2-e767b6d27674acf40393e80f07e70539-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"Most developers have a list somewhere (sometimes just in their heads) of favorite applications they use every day. In X-Team, every hero has his own list as well, and I'd like to share with you the most common tools on those lists. iTerm Like it or…",frontmatter:{id:"ab3d929b-4fb1-4452-bd81-37846947bee9",title:"25 awesome tools every developer should have",author:"Igor Rzegocki",path:"/blog/25-awesome-tools-every-developer-should-have",date:"November 13, 2013",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABc+drzplQz//EABoQAAMAAwEAAAAAAAAAAAAAAAECAwAEERL/2gAIAQEAAQUCmUooUJck9XuSU5TbX3//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGH/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/AaF//8QAHBAAAQQDAQAAAAAAAAAAAAAAAAERITICMbFB/9oACAEBAAY/AqIT5JQfHo69NOf/xAAbEAACAwADAAAAAAAAAAAAAAABEQAhMWFx0f/aAAgBAQABPyEBKy0dFyoUAADYww+/JSwvTBIusZDBFyU//9oADAMBAAIAAwAAABD/AN//xAAXEQADAQAAAAAAAAAAAAAAAAAAAVGB/9oACAEDAQE/EE0NP//EABgRAQEAAwAAAAAAAAAAAAAAAAEAETFR/9oACAECAQE/EEDdg5f/xAAbEAADAQEBAQEAAAAAAAAAAAABESEAMVFxof/aAAgBAQABPxASFYZh6maCMQNl1p8H5mRhIkAjh5QXqlv2jOCYd0gfZiYnCAAT7d//2Q==",aspectRatio:1.3333333333333333,src:"/static/25-awesome-tools-every-developer-should-have-81d768e1371479f7887a3bf24c0035e8-75c44.jpg",srcSet:"/static/25-awesome-tools-every-developer-should-have-81d768e1371479f7887a3bf24c0035e8-d1f5d.jpg 250w,\n/static/25-awesome-tools-every-developer-should-have-81d768e1371479f7887a3bf24c0035e8-6d1fa.jpg 500w,\n/static/25-awesome-tools-every-developer-should-have-81d768e1371479f7887a3bf24c0035e8-75c44.jpg 1000w,\n/static/25-awesome-tools-every-developer-should-have-81d768e1371479f7887a3bf24c0035e8-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"One of the nicest, yet badly documented features in new MUAs is email servers autodiscovering. When you type your e-mail address in configuration window, modern MUA is trying to determine what IMAP/POP3 servers are, and how to connect to them. To do…",frontmatter:{id:"60b24bcb-7bd8-4279-bc5b-8f20be330fa7",title:"Adding Email server autoconfig and autodiscover",author:"Igor Rzegocki",path:"/blog/adding-email-server-autoconfig-and-autodiscover",date:"October 28, 2013",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFGyKC8jLP/xAAbEAACAgMBAAAAAAAAAAAAAAABAgARAwQUEv/aAAgBAQABBQLJshj1vXW89mM9LSmf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgEEAwAAAAAAAAAAAAAAAAERECEiMTJBYf/aAAgBAQAGPwLFa7HZSvNnBOkpEwf/xAAbEAACAwEBAQAAAAAAAAAAAAABEQAhMUFRcf/aAAgBAQABPyELayqGfIDCwoP3ICIG0XAoO95ExSw9n//aAAwDAQACAAMAAAAQcM//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EKhj/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQIBAT8Qqv/EAB0QAQEAAwACAwAAAAAAAAAAAAERACExUWGBsfD/2gAIAQEAAT8Qj9AqahwS8uLmbCJ+HfrAwrNCzo1L5wZ3QXr6fWKgloFT8uDK0UDhn//Z",aspectRatio:1.499267935578331,src:"/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-75c44.jpg",srcSet:"/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-d1f5d.jpg 250w,\n/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-6d1fa.jpg 500w,\n/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-75c44.jpg 1000w,\n/static/adding-email-server-autoconfig-and-autodiscover-0383ba95762ba7c71a8b41fb13e5a5e4-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"There is a popular Internet saying that people are divided into two groups -\nthose who make backups, and those who will. I strongly believe into that,\nthat's why despite that I trust my mailserver setup completely, I still want to\nkeep them in some…",frontmatter:{id:"5e6be7dc-e19a-4ae4-ad4b-13f4c48d9401",title:"Setting encrypted backup Email server",author:"Igor Rzegocki",path:"/blog/setting-encrypted-backup-email-server",date:"April 14, 2013",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAGDC5oE4w2//8QAGBABAAMBAAAAAAAAAAAAAAAAAgABAxD/2gAIAQEAAQUCzNqaGxwaWI3a5//EABcRAAMBAAAAAAAAAAAAAAAAAAEQERL/2gAIAQMBAT8BF0v/xAAWEQEBAQAAAAAAAAAAAAAAAAABECH/2gAIAQIBAT8BXJ//xAAZEAACAwEAAAAAAAAAAAAAAAAAARARITH/2gAIAQEABj8C4U4wtx//xAAaEAADAQADAAAAAAAAAAAAAAAAARExQVFh/9oACAEBAAE/Ibq6W0a6D0QcXhCbRvw//9oADAMBAAIAAwAAABB7H//EABgRAAIDAAAAAAAAAAAAAAAAAAABESEx/9oACAEDAQE/EFWSws//xAAWEQEBAQAAAAAAAAAAAAAAAAABECH/2gAIAQIBAT8QIxP/xAAdEAEAAwADAAMAAAAAAAAAAAABABEhMVFhcYHw/9oACAEBAAE/EKWXPIZ79TU1Ae8SybWB8QK6LT48y8h1W9fiWuif/9k=",aspectRatio:1.499267935578331,src:"/static/setting-encrypted-backup-email-server-66cfd3beed4a6149c344fc6008978c94-75c44.jpg",srcSet:"/static/setting-encrypted-backup-email-server-66cfd3beed4a6149c344fc6008978c94-d1f5d.jpg 250w,\n/static/setting-encrypted-backup-email-server-66cfd3beed4a6149c344fc6008978c94-6d1fa.jpg 500w,\n/static/setting-encrypted-backup-email-server-66cfd3beed4a6149c344fc6008978c94-75c44.jpg 1000w,\n/static/setting-encrypted-backup-email-server-66cfd3beed4a6149c344fc6008978c94-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"The next thing my paranoid me couldn't stand of is that my emails can be easily\nspoofed. Yeah, I know I'm not a very famous person, so probability of such\nthing happening is similar to zero, but hey - tell this to my Paranoid me. :)\nI also sign every…",frontmatter:{id:"1cb813c7-2585-4511-a7bc-ef92140611d9",title:"Add more complexity to your Emails - use DKIM and SPF",author:"Igor Rzegocki",path:"/blog/add-more-complexity-to-your-emails-use-dkim-and-spf",date:"October 27, 2012",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAAY3qfuhGYBv/xAAaEAEAAgMBAAAAAAAAAAAAAAABAAMCERIx/9oACAEBAAEFAudtlIDjO2NzkPv/xAAWEQEBAQAAAAAAAAAAAAAAAAAAETH/2gAIAQMBAT8BxX//xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQIBAT8BRWzf/8QAFxABAQEBAAAAAAAAAAAAAAAAAREQAP/aAAgBAQAGPwIDqXZM/8QAGRABAQEAAwAAAAAAAAAAAAAAAQAhETGB/9oACAEBAAE/IR0DQD2Ae7bMlyEeZ//aAAwDAQACAAMAAAAQ+C//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8QEGxP/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxA4nJe3/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFRof/aAAgBAQABPxCzOlB8iMEduw3Kqg+w1aHIe6J0lgqz/9k=",aspectRatio:1.5585996955859969,src:"/static/add-more-complexity-to-your-emails-use-dkim-and-spf-7e4dc2298be7dce9337581981c6c27b9-75c44.jpg",srcSet:"/static/add-more-complexity-to-your-emails-use-dkim-and-spf-7e4dc2298be7dce9337581981c6c27b9-d1f5d.jpg 250w,\n/static/add-more-complexity-to-your-emails-use-dkim-and-spf-7e4dc2298be7dce9337581981c6c27b9-6d1fa.jpg 500w,\n/static/add-more-complexity-to-your-emails-use-dkim-and-spf-7e4dc2298be7dce9337581981c6c27b9-75c44.jpg 1000w,\n/static/add-more-complexity-to-your-emails-use-dkim-and-spf-7e4dc2298be7dce9337581981c6c27b9-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"After giving up my  spying e-mail provider , and moving\neverything to my own  DeeDee server , I moved\nsmoothly from one paranoia to another. Ok, my e-mail is not read anymore by\nanyone except me, but on the other hand it's on an ATOM machine staying…",frontmatter:{id:"86585931-0df6-43eb-bf25-e41387b5adf4",title:"Setting secure, cloud-based backup system using git and box.com",author:"Igor Rzegocki",path:"/blog/setting-secure-cloud-based-backup-system-using-git-and-box-com",date:"October 14, 2012",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAV6TUhJMTv8A/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAAxESITEy/9oACAEBAAEFAhaxmxJZuU6wJZ6//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAwEBPwElLD//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8BuK//xAAcEAABAwUAAAAAAAAAAAAAAAABAAIREiAhcZH/2gAIAQEABj8Cio9UrLiNWf/EABsQAQADAQADAAAAAAAAAAAAAAEAESFBMXGx/9oACAEBAAE/IQxey0oGWnLdnntvFCUyaGT5z//aAAwDAQACAAMAAAAQcO//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QNlDQv//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8QdBtcP//EABsQAQEAAwEBAQAAAAAAAAAAAAERACFxMYHB/9oACAEBAAE/EIcumQeW5bPxuHRd4OgC2AfMc6HZkpjw/MJfGf/Z",aspectRatio:1.7996485061511422,src:"/static/setting-secure-cloud-based-backup-system-using-git-and-box-com-01fd14d0de673b476ad8c6bdcffea2a5-75c44.jpg",srcSet:"/static/setting-secure-cloud-based-backup-system-using-git-and-box-com-01fd14d0de673b476ad8c6bdcffea2a5-d1f5d.jpg 250w,\n/static/setting-secure-cloud-based-backup-system-using-git-and-box-com-01fd14d0de673b476ad8c6bdcffea2a5-6d1fa.jpg 500w,\n/static/setting-secure-cloud-based-backup-system-using-git-and-box-com-01fd14d0de673b476ad8c6bdcffea2a5-75c44.jpg 1000w,\n/static/setting-secure-cloud-based-backup-system-using-git-and-box-com-01fd14d0de673b476ad8c6bdcffea2a5-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"Recently I bought an\n awesome piece of hardware \nto my MacBook Pro. Unfortunatelly\n to install it ,\nI had to remove my old HDD and all system files with it as well. So for that\noccasion I made myself double gift (Christmas are earlier this year…",frontmatter:{id:"47c37fd8-9947-4c2e-9229-b4f7704eb20d",title:"Setting development environment on your Mac",author:"Igor Rzegocki",path:"/blog/setting-development-environment-on-your-mac",date:"September 22, 2012",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAwb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABopKZlI58l//EABoQAQADAAMAAAAAAAAAAAAAAAEAAgMEERL/2gAIAQEAAQUC2WekldBM9Eb8l7dbT//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAAEDBQEAAAAAAAAAAAAAAAEAEBECISJBgZH/2gAIAQEABj8CxPiuT1o0VApb/8QAGxABAQEAAgMAAAAAAAAAAAAAAREAMUFhcYH/2gAIAQEAAT8hmFTnKFWTBKN+YSy9GChHnIVqemb/2gAMAwEAAgADAAAAECjv/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQMBAT8QR//EABYRAQEBAAAAAAAAAAAAAAAAAAAhQf/aAAgBAgEBPxDFf//EAB0QAQEAAgIDAQAAAAAAAAAAAAERAEEhMVFxkaH/2gAIAQEAAT8QkRQNb4/ZckYLq6fRj9B5EmAkfytM7Mii9m5WmWow+Gf/2Q==",aspectRatio:1.499267935578331,src:"/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-75c44.jpg",srcSet:"/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-d1f5d.jpg 250w,\n/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-6d1fa.jpg 500w,\n/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-75c44.jpg 1000w,\n/static/setting-development-environment-on-your-mac-a3113985f259dd2065a291cb69ea550f-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:'I was always prefering "stay in the shadows" policy in terms of email address.\nI have two secondary emails (for spam I want to read, and for spam I want to be\nsent into oblivion i.e. for "Register NOW to download this 2KB file" sites). My\nprimary e…',frontmatter:{id:"2b8aa887-ec53-4920-bc16-48f4a05091c5",title:"Adding a little bit of SpamAssassin into Postfix, Dovecot, Sieve soup",author:"Igor Rzegocki",path:"/blog/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup",date:"July 21, 2012",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABhy8rDIP/xAAZEAACAwEAAAAAAAAAAAAAAAAAAQIQESH/2gAIAQEAAQUCrSL4Nn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAEBAQAAAAAAAAAAAAAAAAAQQtH/2gAIAQEABj8Clx//xAAdEAEAAgEFAQAAAAAAAAAAAAABABExEEFRgaHh/9oACAEBAAE/IWrLOXcvH3RaMCloIrv7KWf/2gAMAwEAAgADAAAAEIsv/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QR//EABwQAQEAAgIDAAAAAAAAAAAAAAERACExQXGR8P/aAAgBAQABPxBggQubYkMbYDfRpfl9Yi7Mr6E8g7cs5M5VU5w4qrn/2Q==",aspectRatio:1.3329831932773109,src:"/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-75c44.jpg",srcSet:"/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-d1f5d.jpg 250w,\n/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-6d1fa.jpg 500w,\n/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-75c44.jpg 1000w,\n/static/adding-a-little-bit-of-spamassassin-into-postfix-slash-dovecot-slash-sieve-soup-54d64aef10c4988191b996a934c3cb4d-5b543.jpg 1269w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},{node:{excerpt:"Leaving GMail was of the best decisions for my mail I made recently. But also a\nmost problematic one. I needed to set all the MTA architecture myself. I tested\nmany solutions out there and finally ended with postfix + dovecot\nconfiguration.  It…",frontmatter:{id:"35b53ac0-d5a5-4321-82b4-ad81a08f8e44",title:"Setting server-side mail filtering with sieve and dovecot",author:"Igor Rzegocki",path:"/blog/setting-server-side-mail-filtering-with-sieve-and-dovecot",date:"July 16, 2012",cover:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABVZPUKoweP//EABoQAQEAAgMAAAAAAAAAAAAAAAEAAhIDETH/2gAIAQEAAQUC2G2y6bjBkS9v/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bh//EABoQAQACAwEAAAAAAAAAAAAAABEBEAACITH/2gAIAQEABj8CIInDlGoL5f8A/8QAGxAAAwACAwAAAAAAAAAAAAAAAAEhEUFRYeH/2gAIAQEAAT8hUbySFmy6TGpkJHgKg9j/2gAMAwEAAgADAAAAEOg//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQMBAT8QprCD/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQIBAT8Qg//EAB0QAQACAgIDAAAAAAAAAAAAAAEAIRFBMXFhgZH/2gAIAQEAAT8QRCVvKno1ADSA5HtWNLryCmiHY39iosJ41FQVmf/Z",aspectRatio:1.2412121212121212,src:"/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-75c44.jpg",srcSet:"/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-d1f5d.jpg 250w,\n/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-6d1fa.jpg 500w,\n/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-75c44.jpg 1000w,\n/static/setting-server-side-mail-filtering-with-sieve-and-dovecot-1315f473cccff0bf5dfdfb405c9b6175-c2ca0.jpg 1024w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-b6c844474f99867ebef0.js.map