import { Tabs } from "antd";
import { Modal, Card, CrossChainCard } from "../components";

export default function MainCard() {
  const { TabPane } = Tabs;
  return (
    <div className="home">
      <div id="card" className="card p-8">
        <Tabs type="card">
          <TabPane tab="Component" key="1">
            <Modal />
          </TabPane>
          <TabPane tab="Simple" key="2">
            <CrossChainCard />
          </TabPane>
          <TabPane tab="Advance" key="3">
            <Card />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
