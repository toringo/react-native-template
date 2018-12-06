const addTopicAction = (topic) => ({
  type: 'ADD_TOPIC',
  topic,
});

export const addTopic = (dispatch) => (params) => dispatch(addTopicAction(params));
