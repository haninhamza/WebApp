

import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { Boxdata } from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function PublicPage() {
  return (
    <div className="home">
      <FeaturedInfo />
      
      <Chart data={ Boxdata} title="Number of mailboxes" grid dataKey={"uv"}/>
      
     
      <div className="homeWidgets">
        <WidgetSmall/>
        <WidgetLg/>
      </div>
     </div>
  );
}
