import path from 'path';
import fs from 'fs/promises';

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((p) => p.id);
  const paths = [{
    params: { pid: 'p1' },
  }] //ids.map((id) => ({ params: { pid: id } }));

  return {
    paths,
    // true: if the page is not found, Next.js will try to generate it on the fly 
    // false: if the page is not found, Next.js will show a 404 page
    // blocking: if the page is not f ound, Next.js will show a 404 page and try to generate it on the fly
    fallback: true,   
  };
}

export default ProductDetailPage;
