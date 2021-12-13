// export const increment = (nr) => {
//     return{
//         type: "INCREMENT",
//         payload : nr
//     }
// }

// export const decrement = () => {
//     return{
//         type: "DECREMENT"
//     }
// }
//////////////////////////////////////////
// export function _getUsers () {
//     return new Promise((res, rej) => {
//       setTimeout(() => res({...users}), 1000)
//       console.log("res_getUsers", res)
//     })
//   }

export const gettingUsers = () => {
    return{
        type: "GETUSERS"
    }
}