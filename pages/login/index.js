const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Author', 'golovanya_ ');
  res.end('golovanya_');
  return { props: {} };
}

export default plain;