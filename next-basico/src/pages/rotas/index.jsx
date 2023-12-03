import Link from "next/link";
import router, { useRouter } from "next/router";
import nProgress from "nprogress";

router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  nProgress.start();
});
router.events.on("routeChangeComplete", () => {
  nProgress.done();
});
router.events.on("routeChangeError", () => {
  nProgress.done();
});

export default function rotas() {

  

  function navegacaoSimples(url) {
    router.push(url);
  }

  function navegacaoComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 123,
        nome: "Ana"
      }
    });
  }

  return (
    <div className="page">
      <h1>Rotas Index</h1>
      <ul>
        <Link href={"/rotas/params?id=12&nome=Ana"}>
          <li>Params</li>
        </Link>
      </ul>
      <ul>
        <Link href={"/rotas/123/buscar"}>
          <li>Buscar</li>
        </Link>
      </ul>
      <ul>
        <Link href={"/rotas/123/Alexandre"}>
          <li>Alexandre</li>
        </Link>
      </ul>
      <div
        style={{
          display: "flex",
          FlexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/Alexandre")}>Alexandre</button>
        <button onClick={navegacaoComParams}>Params</button>
      </div>
    </div>
  );
}
