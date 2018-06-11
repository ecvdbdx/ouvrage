import base from '../airtable/config';

export function destroyUser (id) {
  base('Profil').destroy(id, function (err, deletedRecord) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Deleted record', deletedRecord.id);
  });
}

export function editUser (id, params) {
  base('Profil').update(id, params, function (err, resp) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Profil edited', resp);
  });
}

export function getIdAirTable (id, callback) {
  base('Profil').select({
    filterByFormula: '{id} = "' + id + '"'
  })
  .eachPage(response => callback(response[0].id),
            err => {
              if (err) {
                console.error(err); return;
              }
            });
}

export function getStudents () {
  let students = [];
  return new Promise((resolve, reject) => {
    base('Profil').select({
      view: 'Grid view'
    }).eachPage(function page (records, fetchNextPage) {
      students.push(...records.map((record) => {
        record.fields.airtable_id = record.id;
        return record.fields;
      }));
      fetchNextPage();
    }, (err) => {
      if (err)
        reject(err);

      else
        resolve(students);
    });
  });
}

export function getConversation (user1, user2) {
  let messages = [];
  return new Promise((resolve, reject) => {
    base('Message').select({
      view: 'Grid view',
      filterByFormula:
        `OR(
          AND({first_user_id} = "${user1.id}",{second_user_id} = "${user2.id}"),
          AND({second_user_id} = "${user1.id}",{first_user_id} = "${user2.id}")
        )`
    }).eachPage(function page (records, fetchNextPage) {
      messages.push(...records.map((record) => record.fields));
      fetchNextPage();
    }, (err) => {
      if (err)
        reject(err);

      else
        resolve(messages);
    });
  });
}

export function sendMessage (message, user1, user2) {
  return new Promise((resolve, reject) => {
    base('Message').create({
      text: message,
      first_user_id: [user1.airtable_id],
      second_user_id: [user2.airtable_id],
      created_at: Date.now()
    }, function (err, record) {
      if (err)
        reject(err);

      else
        resolve(record);
    });
  });
}
