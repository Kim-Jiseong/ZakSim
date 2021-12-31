import React, { Component } from 'react';
import GlobalStyle from "./components/GlobalStyle";
import Router from "./pages/Router";
import { BrowserRouter} from "react-router-dom";
import 
{
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
// import imgA from '../public/asset/LandingTitle.svg';

// class App extends Component {
//   state = {
//       posts: []
//   };
//   async componentDidMount() {
//       try {
//           const res = await fetch('http://127.0.0.1:8000/api/');
//           const posts = await res.json();
//           this.setState({
//               posts
//           });
//       } catch (e) {
//           console.log(e);
//       }
//   }
//   render() {
//     const imgA = "/assets/BG.svg";
//     const imgB = "/assets/LandingBG.svg";
//       return (
//           <div>
//               {this.state.posts.map(item => (
//                   <div key={item.id}>
//                       <h1>{item.title}</h1>
//                       <span>{item.content}</span>
//                   </div>
//               ))}
//               <img src={imgA}></img>
//               {/* <img src={imgB}></img> */}
//           </div>
//       );
//   }
// }

function App() {
    return (
      <>
        <GlobalStyle>
          <link
            href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            rel="stylesheet"
          />
          <RecoilRoot>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          </RecoilRoot>
        </GlobalStyle>
      </>
    );
  }
  
export default App;
