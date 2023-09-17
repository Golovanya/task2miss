const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('\nfunction task(x) {\nreturn x* this.x**2\n} ');
  return { props: {} };
}

export default plain;