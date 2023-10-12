import {searchUrl, LOADING, ERROR, DATA} from './constants';

export const searchImage = (query, dispatch) => {
  const queryUrl = searchUrl.replace('{queryString}', query);
  const encodedUrl = encodeURI(queryUrl);
  dispatch({type: LOADING});
  fetch(encodedUrl)
    .then(res => {
      const parsedRes = res.json();
      return parsedRes;
    })
    .then(res => {
      dispatch({type: DATA, payload: res.hits});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
};

// solution for highligh the searched text.

const searchText = 'maggie';

queryStringWordArray = searchText.split(' ');

const desc = 'my name is aayush.I eat abcd. I think xyz. I am good';

// using sliding window, desc string can be broken down into array of strins and then using queryStringWordArray we can desice the syle to apply

// const brokenStringarr = [];

// <Text>
//   {
//     brokenStringarr.map((item)=>{
//       queryStringWordArray.includes(item)
//         <Text style={condn? style1 : style2}>
//           {item}
//         </Text>

//     })
//   }
// </Text>
