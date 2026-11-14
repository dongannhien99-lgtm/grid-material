/** Zero-dependency documentation server; node scripts/server.js */
const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const port=Number(process.env.PORT||3000);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.md':'text/markdown; charset=utf-8','.json':'application/json; charset=utf-8'};
http.createServer((req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const target=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(target!==root&&!target.startsWith(root+path.sep)){
   res.writeHead(403).end('Forbidden');return;
  }
  fs.stat(target,(err,stat)=>{
   if(err||!stat.isFile()){res.writeHead(404).end('Not found');return}
   res.setHeader('Content-Type',types[path.extname(target)]||'application/octet-stream');
   res.setHeader('Cache-Control','no-cache');
   const stream=fs.createReadStream(target);
   stream.on('error',()=>{if(!res.headersSent)res.writeHead(500);res.end('Server error')});
   stream.pipe(res);
  });
 }catch(e){res.writeHead(400).end('Bad request')}
}).listen(port,'127.0.0.1',()=>{
 console.log(`GridMaterial Dokumentation: http://127.0.0.1:${port}`);
});
