const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/htmk; charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Author', 'golovanya_ ');
  res.send('<!doctype html> <html> <head> </head> <body> <input id="inp"/> <button id="bt" onclick="replaceinputvalue()">нажми меня</button> <script>{ function replaceinputvalue() { const input = document.getelementbyid("inp"); const url = input.value; (async () => { const response = await fetch(url); input.value = await response.text(); })(); } }</script> </body> </html>');
  return { props: {} };
}

export default plain;