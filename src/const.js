// CONF SERVEUR DISTANT
export default {
    webpoint_user: 'http://35.180.228.4:5000/personneMail?mail=plaideaug83170@gmail.com',
    webpoint_list_family: 'http://35.180.228.4:5000/familleMail?mail=',
    webpoint_add_family: 'http://35.180.228.4:5000/famille',
    webpoint_list_event: 'http://35.180.228.4:5000/evenementsByUserMail?mail=',
    webpoint_edit_event: 'http://35.180.228.4:5000/evenementsById?id=',
    webpoint_add_event: 'http://35.180.228.4:5000//evenement',
    webpoint_list_member_family:'http://35.180.228.4:5000/getMembresByFamilyAndMail?id=',
    webpoint_list_member_family_end:'&mail=plaideaug83170%40gmail.com',
    webpoint_bloquer:'http://35.180.228.4:5000/bloquerByMail?mail=plaideaug83170%40gmail.com&mailABloquer=',
    webpoint_debloquer:'http://35.180.228.4:5000/debloquerByMail?mail=plaideaug83170%40gmail.com&mailADebloquer=',
    webpoint_genealogie:'http://35.180.228.4:5000/genealogie?mail=plaideaug83170@gmail.com'
};

/*// CONF SERVEUR LOCAL
export default {
    webpoint_user: 'http://127.0.0.1:5000/personneMail?mail=plaideaug83170@gmail.com',
    webpoint_list_family: 'http://127.0.0.1:5000/familleMail?mail=',
    webpoint_add_family: 'http://127.0.0.1:5000/famille',
    webpoint_list_event: 'http://127.0.0.1:5000/evenementsByUserMail?mail=',
    webpoint_edit_event: 'http://127.0.0.1:5000/evenementsById?id=',
    webpoint_add_event: 'http://127.0.0.1:5000//evenement',
    webpoint_list_member_family:'http://127.0.0.1:5000/getMembresByFamilyAndMail?id=',
    webpoint_list_member_family_end:'&mail=plaideaug83170%40gmail.com'
};*/