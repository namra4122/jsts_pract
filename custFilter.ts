const a = ` jhkjh lkjasdlfjhas laskjdasjhdf   asldjf a                 asdf asdfasdfa              asdfasdf
jkshd asdf asdfasdfaq                 hgfytf iuyiuh                 iygu iu              iuh iugh
aslidufgiaysd                                        asdfasdf                          asdfasdf
`;

function custsplit(message: string, delim: string): string[] {
  let temp = 0;
  const res_arr = [];
  for (let i = 0; i < message.length; i++) {
    if (message[i] === delim) {
      res_arr.push(message.slice(temp, i));
      temp = i + 1;
    }
  }
  return res_arr;
}

function custfilter(message: string[]){
  const res_obj: any[] = [];
  message.forEach((item: string) => {
    let idx = -1;
    const x: string[] = [];
    for (let i=0; i<item.length;i++){
      if (item[i] === " "){
        if (idx !== -1){
          x.push(item.slice(idx, i))
          idx = -1
        }
      } else{
        idx = idx === -1 ? i : idx;
      }
    }

    res_obj.push(x);
  });

  return res_obj;
}

const b = custsplit(a, '\n');
const c = custfilter(b);
// console.log(b);
console.log(c)
