export const showType = (type, title) => {
    if (title === "overtime") {
        switch (type) {
            case 1:
                return "双休日加班";
            case 2:
                return "节假日加班";
            case 3:
                return "工作日加班";
                defalut:
                return "加班";
        }
    } else {
        switch (type) {
            case 1:
                return "年假";
            case 2:
                return "调休";
                defalut:
                return "休假";
        }
    }
}

export const showTime=(start)=>{
    let start_num = new Date(new Date(start).toGMTString()) * 1;
    //   console.log(start_num);
      let S = start_num;
      let T = new Date(1e3 * S);
      let Format = function(Q) {
        return Q < 10 ? "0" + Q : Q;
      };

      let Result = Format(T.getHours()) + ":" + Format(T.getMinutes());
    //   console.log(Result);
      return Result;
}
