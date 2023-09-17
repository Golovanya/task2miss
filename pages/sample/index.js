const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Author', 'golovanya_ ');
  res.end('function task(x) {\nreturn x * Math.pow(x,2)\n}');
  return { props: {} };
}

export default plain;