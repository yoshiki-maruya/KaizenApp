import React from 'react';

type Event = React.SyntheticEvent<Element> | React.SyntheticEvent<unknown> | Record<string, never>

type EventHandler<T = undefined> = (event?: Event, data?: T | undefined) => void;

export default EventHandler;
