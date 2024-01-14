import React from "react";
import "./style.scss";
import Layout from "../../Component/Layout/layout";
import useStore from "../../Utility/useStore/store";
const HomePage: React.FC = (): any => {
  const user = useStore(state => state.userData);
  const name = user.name || 'Tom';
  const role = user.role || 'customer';
  const email = user.email || "c@c.com";
  const avatar = user.avatar || 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg';
  console.log("user from store",user);
  
  return (
    <Layout>
      <div>
        <h1>Hello Homepage</h1>
        <div>
          <img src={avatar} alt="image user"/>
          <ul>
            <li>{ name}</li>
            <li>{email}</li>
            <li>{role}</li>
            <li></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default HomePage;
