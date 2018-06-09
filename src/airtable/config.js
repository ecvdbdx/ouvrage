import airtable from 'airtable';
import config from '../../airtableConfig.json';

airtable.configure({
  endpointUrl: config.endpointUrl,
  apiKey: config.apiKey
});

export default airtable.base(config.base);


