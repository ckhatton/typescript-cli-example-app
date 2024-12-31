export default function print(msg: string, colour?: string) {
  colour ? console.log(colour, `   ${msg}`) : console.log(`   ${msg}`);
}
