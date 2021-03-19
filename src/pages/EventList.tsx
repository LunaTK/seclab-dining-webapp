import { List } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchEventList } from '../lib/api';
import { IEventInfo, FirestoreDocRef } from '../types/common';

const EventList = () => {
  const [eventList, setEventList] = useState<FirestoreDocRef<IEventInfo>[]>([]);

  useEffect(() => {
    fetchEventList().then(setEventList);
  }, [])

  return (
    <List
      header={<div>이벤트 목록</div>}
      bordered
      dataSource={eventList}
      renderItem={(item: FirestoreDocRef<IEventInfo>) => (
        <List.Item>
          <Link to={`/event/${item.id}`}>{item.data().title}</Link>
        </List.Item>)
      }
    />
  );
};

export default EventList;