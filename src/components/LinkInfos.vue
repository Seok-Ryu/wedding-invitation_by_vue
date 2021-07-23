<template>
    <div class="custom-content-container">
        <h3> sub </h3>
        <button id="authorize_button" style="display: none;">Authorize</button>
        <button id="signout_button" style="display: none;">Sign Out</button>
        <pre id="content" style="white-space: pre-wrap;"></pre>

    </div>
</template>

<script>
    const CLIENT_ID = '215390870050-722lfan2ekh51le7rsch65dnum8onjm8.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyDyYUTFYEpqD4c6Okb-qDE42shcSup0POQ';

    // Array of API discovery doc URLs for APIs used by the quickstart
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = "https://www.googleapis.com/auth/calendar";

    let authorizeButton = document.getElementById('authorize_button');
    let signoutButton = document.getElementById('signout_button');

    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
            authorizeButton.style.display = 'none';
            signoutButton.style.display = 'block';
            // listUpcomingEvents();
            addNewEvent();
        } else {
            authorizeButton.style.display = 'block';
            signoutButton.style.display = 'none';
        }
    }

    const addNewEvent = () => {
        var event = {
            'summary': '류석 + 오다영 결혼식',
            'location': '용산가족공원, 대한민국 서울특별시 용산구 용산동6가 서빙고로 185',
            'description': '옷차림은 편하게, 마음은 가볍게, 10분일찍 오시면 좋아요',
            'start': {
                'dateTime': '2021-09-11T15:30:00+09:00',
                'timeZone': 'Asia/Seoul'
            },
            'end': {
                'dateTime': '2021-09-11T17:00:00+09:00',
                'timeZone': 'Asia/Seoul'
            },
            'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'popup', 'minutes': 60}, // 1 hour
                    {'method': 'popup', 'minutes': 1440}, // 1 day
                ]
            }
        };
        // eslint-disable-next-line no-undef
        var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        });
        // eslint-disable-next-line no-undef
        request.execute(function(event) {
            appendPre('Event created: ' + event.htmlLink);
        });
    }



    // eslint-disable-next-line no-unused-vars
    function listUpcomingEvents() {
        // eslint-disable-next-line no-undef
        gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        }).then(function(response) {
            var events = response.result.items;
            appendPre('Upcoming events:');

            if (events.length > 0) {
                for (var i = 0; i < events.length; i++) {
                    var event = events[i];
                    var when = event.start.dateTime;
                    if (!when) {
                        when = event.start.date;
                    }
                    appendPre(event.summary + ' (' + when + ')')
                }
            } else {
                appendPre('No upcoming events found.');
            }
        }, function(error) {
            appendPre(JSON.stringify(error, null, 2));
        });
    }

    const handleAuthClick = () => {
        // eslint-disable-next-line no-undef
        gapi.auth2.getAuthInstance().signIn();
    }

    const handleSignoutClick = () => {
        // eslint-disable-next-line no-undef
        gapi.auth2.getAuthInstance().signOut();
    }

    const appendPre = (message) => {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
    }

    const initClient = () => {
        // eslint-disable-next-line no-undef
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function () {
            // Listen for sign-in state changes.
            // eslint-disable-next-line no-undef
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            // eslint-disable-next-line no-undef
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            authorizeButton.onclick = handleAuthClick;
            signoutButton.onclick = handleSignoutClick;
        }, function(error) {
            appendPre(JSON.stringify(error, null, 2));
        });
    }

    export default {
        name: "LinkInfos",
        mounted() {
            authorizeButton = document.getElementById('authorize_button');
            signoutButton = document.getElementById('signout_button');
            this.handleClientLoad();
        },
        methods: {
            handleClientLoad() {
                // eslint-disable-next-line no-undef
                gapi.load('client:auth2', initClient);
            },
            kakaoInit() {
                // eslint-disable-next-line no-undef
                if(Kakao.isInitialized()) {
                    console.log('already init');
                    return true;
                }

                // eslint-disable-next-line no-undef
                console.log('before init', Kakao.isInitialized());
                // eslint-disable-next-line no-undef
                Kakao.init("194d203f9fed44b8d0edf6c4158b8863");
                // eslint-disable-next-line no-undef
                Kakao.isInitialized();
                // eslint-disable-next-line no-undef
                console.log('after init', Kakao.isInitialized());
                return true;
            },
            sendKakaoMessage() {
                this.kakaoInit();
                console.log('send here')
                // eslint-disable-next-line no-undef
                Kakao.Link.sendScrap({
                    requestUrl: 'https://developers.kakao.com',
                });
                //ErrorCode(4002)
                //UUID(0bb80215-00ac-41b8-a578-01a0dc9f3d8c)
            },
        }
    }
</script>

<style scoped>

</style>
