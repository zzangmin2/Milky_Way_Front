import jsonServer from "json-server";
const { create, defaults, router } = jsonServer;

const server = create();
const middlewares = defaults();
const dataRouter = router("db.json");

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // 모든 출처에서의 요청 허용
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(middlewares);
server.use(dataRouter);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
