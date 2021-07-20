<template>
    <div class="custom-content-container">
        <h3> sub </h3>
        <button id="authorize_button" style="display: none;">Authorize</button>
        <button id="signout_button" style="display: none;">Sign Out</button>
        <pre id="content" style="white-space: pre-wrap;"></pre>

    </div>
</template>

<script>
    const CLIENT_ID = '215390870050-lrndk047u8lnlckk9s8721p55u0a0686.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyCwJDLMq0a0D4xCqXtDZjHe9oMZutPax6c';

    // Array of API discovery doc URLs for APIs used by the quickstart
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

    const authorizeButton = document.getElementById('authorize_button');
    const signoutButton = document.getElementById('signout_button');

    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
            authorizeButton.style.display = 'none';
            signoutButton.style.display = 'block';
            listUpcomingEvents();
        } else {
            authorizeButton.style.display = 'block';
            signoutButton.style.display = 'none';
        }
    }

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
            sendKakaoMessage3() {
                this.kakaoInit();
                console.log('send here 333')
                // eslint-disable-next-line no-undef
                Kakao.Link.createScrapButton({
                    container: '#kakao-link-btn3',
                    requestUrl: 'https://developers.kakao.com',
                });
            }
        }
    }
</script>

<style scoped>

</style>
