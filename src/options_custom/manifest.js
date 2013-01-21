// SAMPLE
this.manifest = {
    "name": "My Extension",
    "icon": "../../icons/icon48.png",
    "settings": [
        /*{
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "username",
            "type": "text",
            "label": i18n.get("username"),
            "text": i18n.get("x-characters")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "password",
            "type": "text",
            "label": i18n.get("password"),
            "text": i18n.get("x-characters-pw"),
            "masked": true
        },*/
        {
            "tab": i18n.get("information"),
            "group": i18n.get("about"),
            "name": "myDescription",
            "type": "description",
            "text": i18n.get("description")
        },/*
        {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "myCheckbox",
            "type": "checkbox",
            "label": i18n.get("enable")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "myButton",
            "type": "button",
            "label": i18n.get("disconnect"),
            "text": i18n.get("logout")
        },*/

        {
            "tab": i18n.get("details"),
            "group": i18n.get("apps"),
            "name": "app1",
            "type": "text",
            "label": i18n.get("app1"),
            "text": i18n.get("x-url")
        },
        {
            "tab": i18n.get("details"),
            "group": i18n.get("apps"),
            "name": "app2",
            "type": "text",
            "label": i18n.get("app2"),
            "text": i18n.get("x-url")
        },
         {
            "tab": i18n.get("details"),
            "group": i18n.get("apps"),
            "name": "app3",
            "type": "text",
            "label": i18n.get("app3"),
            "text": i18n.get("x-url")
        },
        {
            "tab": i18n.get("details"),
            "group": i18n.get("apps"),
            "name": "app4",
            "type": "text",
            "label": i18n.get("app4"),
            "text": i18n.get("x-url")
        }/*,

        {
            "tab": i18n.get("details"),
            "group": "Sound",
            "name": "noti_volume",
            "type": "slider",
            "label": "Notification volume:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        {
            "tab": i18n.get("details"),
            "group": "Sound",
            "name": "sound_volume",
            "type": "slider",
            "label": "Sound volume:",
            "max": 100,
            "min": 0,
            "step": 1,
            "display": true,
            "displayModifier": function (value) {
                return value + "%";
            }
        },
        {
            "tab": i18n.get("details"),
            "group": "Food",
            "name": "myPopupButton",
            "type": "popupButton",
            "label": "Soup 1 should be:",
            "options": {
                "groups": [
                    "Hot", "Cold",
                ],
                "values": [
                    {
                        "value": "hot",
                        "text": "Very hot",
                        "group": "Hot",
                    },
                    {
                        "value": "Medium",
                        "group": 1,
                    },
                    {
                        "value": "Cold",
                        "group": 2,
                    },
                    ["Non-existing"]
                ],
            },
        },
        {
            "tab": i18n.get("details"),
            "group": "Food",
            "name": "myListBox",
            "type": "listBox",
            "label": "Soup 2 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        },
        {
            "tab": i18n.get("details"),
            "group": "Food",
            "name": "myRadioButtons",
            "type": "radioButtons",
            "label": "Soup 3 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        }*/
    ],
    "alignment": [
        /*[
            "username",
            "password"
        ],
        [
            "noti_volume",
            "sound_volume"
        ]*/
    ]
};
