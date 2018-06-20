let sessions = [
  {
    "_id": {
      "$oid": "5af9c7624e08a2000b000027"
    },
    "game": "CSSQuickDraw",
    "game_master_id": "c85e3ad27c035cfb",
    "puzzles": [
      {
        "game": "CSSQuickDraw",
        "name": "Matching Game",
        "input": "\u003cheader data-qdid=\"0\"\u003eheader\u003c/header\u003e\u003cmain data-qdid=\"1\"\u003e\u003cdiv class=\"match\" data-qdid=\"2\"\u003ecellar door\u003c/div\u003e\u003c/main\u003e\u003cfooter data-qdid=\"3\"\u003efooter\u003c/footer\u003e",
        "expected": "[\"2\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": []
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      },
      {
        "game": "CSSQuickDraw",
        "name": "Matching Game II",
        "input": "\u003cheader data-qdid=\"0\"\u003eheader\u003c/header\u003e\u003cmain data-qdid=\"1\"\u003e\u003carticle data-qdid=\"2\"\u003ecellar door\u003c/article\u003e\u003c/main\u003e\u003cfooter data-qdid=\"3\"\u003efooter\u003c/footer\u003e",
        "expected": "[\"2\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": []
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      },
      {
        "game": "CSSQuickDraw",
        "name": "Classy",
        "input": "\u003cdiv class=\"glass door\" data-qdid=\"0\"\u003e\u003c/div\u003e\u003cdiv class=\"cellar\" data-qdid=\"1\"\u003e\u003cdiv class=\"door\" data-qdid=\"2\"\u003e\u003cdiv class=\"behind cellar door\" data-qdid=\"3\"\u003e\u003c/div\u003e\u003cspan class=\"jar of pickles\" data-qdid=\"4\"\u003e\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"door cellar\" data-qdid=\"5\"\u003e\u003c/div\u003e\u003cdiv class=\"little cellar\" data-qdid=\"6\"\u003e\u003c/div\u003e",
        "expected": "[\"3\", \"5\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": []
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      },
      {
        "game": "CSSQuickDraw",
        "name": "Articles Everywhere",
        "input": "\u003carticle data-qdid=\"0\"\u003e\u003cdiv data-qdid=\"1\"\u003e\u003c/div\u003e\u003cspan data-qdid=\"2\"\u003e\u003c/span\u003e\u003cp data-qdid=\"3\"\u003e\u003c/p\u003e\u003ca data-qdid=\"4\"\u003e\u003c/a\u003e\u003c/article\u003e",
        "expected": "[\"1\", \"2\", \"3\", \"4\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": [
            "p",
            "~",
            "+"
          ]
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      },
      {
        "game": "CSSQuickDraw",
        "name": "Anchor",
        "input": "\u003cdiv data-qdid=\"0\"\u003e\u003c/div\u003e\u003cdiv data-qdid=\"1\"\u003e\u003c/div\u003e\u003cdiv data-qdid=\"2\"\u003e\u003c/div\u003e\u003cdiv data-qdid=\"3\"\u003e\u003c/div\u003e\u003cdiv data-anchor data-qdid=\"4\"\u003e\u003c/div\u003e\u003cdiv data-qdid=\"5\"\u003e\u003c/div\u003e\u003cdiv data-qdid=\"6\"\u003e\u003c/div\u003e\u003cdiv data-qdid=\"7\"\u003e\u003c/div\u003e\u003cdiv data-qdid=\"8\"\u003e\u003c/div\u003e",
        "expected": "[\"5\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": [
            ":"
          ]
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      },
      {
        "game": "CSSQuickDraw",
        "name": "Signing Up",
        "input": "\u003cmain data-qdid=\"0\"\u003e\u003cinput data-qdid=\"1\" type=\"text\" /\u003e\u003cinput data-qdid=\"2\" type=\"number\" /\u003e\u003cinput data-qdid=\"3\" type=\"checkbox\" checked /\u003e\u003cinput data-qdid=\"4\" type=\"checkbox\" /\u003e\u003cinput data-qdid=\"5\" type=\"text\" /\u003e\u003c/main\u003e",
        "expected": "[\"3\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": [
            "n",
            "["
          ]
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      },
      {
        "game": "CSSQuickDraw",
        "name": "Linear",
        "input": "\u003cul data-qdid=\"0\"\u003e\u003cli data-qdid=\"1\"\u003e\u003c/li\u003e\u003cli data-qdid=\"2\"\u003e\u003c/li\u003e\u003cli data-qdid=\"3\"\u003e\u003c/li\u003e\u003cli data-qdid=\"4\"\u003e\u003c/li\u003e\u003cli data-qdid=\"5\"\u003e\u003c/li\u003e\u003cli data-qdid=\"6\"\u003e\u003c/li\u003e\u003cli data-qdid=\"7\"\u003e\u003c/li\u003e\u003cli data-qdid=\"8\"\u003e\u003c/li\u003e\u003c/ul\u003e",
        "expected": "[\"2\", \"4\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": []
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      },
      {
        "game": "CSSQuickDraw",
        "name": "Envious Heirs",
        "input": "\u003cdiv data-qdid=\"0\"\u003e\u003cdiv class=\"firstborn\" data-qdid=\"1\"\u003e\u003c/div\u003e\u003cdiv id=\"second-son\" data-qdid=\"2\"\u003e\u003c/div\u003e\u003cspan data-qdid=\"3\"\u003e\u003c/span\u003e\u003cdiv data-qdid=\"4\"\u003e\u003c/div\u003e\u003cspan data-qdid=\"5\"\u003e\u003c/span\u003e\u003c/div\u003e",
        "expected": "[\"2\", \"3\", \"4\", \"5\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": [
            ","
          ]
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      },
      {
        "game": "CSSQuickDraw",
        "name": "Mariana",
        "input": "\u003cdiv data-qdid=\"0\"\u003e\u003cdiv data-qdid=\"1\"\u003e\u003cdiv data-qdid=\"2\"\u003e\u003cdiv data-qdid=\"3\"\u003e\u003cdiv data-qdid=\"4\"\u003e\u003cdiv data-qdid=\"5\"\u003e\u003cdiv data-qdid=\"6\"\u003e\u003cdiv data-qdid=\"7\"\u003e\u003cdiv data-qdid=\"8\"\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e",
        "expected": "[\"8\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": []
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      },
      {
        "game": "CSSQuickDraw",
        "name": "Tech Stack",
        "input": "\u003cdiv data-attr=\"c s s\" data-qdid=\"0\"\u003e\u003c/div\u003e\u003cspan data-attr=\"j s\" data-qdid=\"1\"\u003e\u003c/span\u003e\u003cdiv data-attr=\"x m l\" data-qdid=\"2\"\u003e\u003c/div\u003e\u003cdiv data-attr=\"soap\" data-qdid=\"3\"\u003e\u003c/div\u003e\u003cdiv data-attr=\"j s o n\" data-qdid=\"4\"\u003e\u003c/div\u003e",
        "expected": "[\"0\", \"1\", \"4\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": [
            ":",
            "+",
            ","
          ]
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      }
    ],
    "participants": {
      "03a2461f7613d00a": {
        "uid": "03a2461f7613d00a"
      },
      "053b976e830f1380": {
        "uid": "053b976e830f1380"
      },
      "05cafc0b5c9ae78c": {
        "uid": "05cafc0b5c9ae78c"
      },
      "0879d2a167cef132": {
        "uid": "0879d2a167cef132"
      },
      "08bc05c40aee0ef6": {
        "uid": "08bc05c40aee0ef6"
      },
      "0af2c05d62662e75": {
        "uid": "0af2c05d62662e75"
      },
      "0b51479a7fe6fc9d": {
        "uid": "0b51479a7fe6fc9d"
      },
      "0b914dc18e1050e4": {
        "uid": "0b914dc18e1050e4"
      },
      "0c265c8b844334a6": {
        "uid": "0c265c8b844334a6"
      },
      "0d6d4955615a97f6": {
        "uid": "0d6d4955615a97f6"
      },
      "0e3b3572c97b9718": {
        "uid": "0e3b3572c97b9718"
      },
      "0e7fa1fc555463c5": {
        "uid": "0e7fa1fc555463c5"
      },
      "0e8ceb668d96c395": {
        "uid": "0e8ceb668d96c395"
      },
      "0ea95482cf1613a8": {
        "uid": "0ea95482cf1613a8"
      },
      "105cabccd21f71d9": {
        "uid": "105cabccd21f71d9"
      },
      "15ae967d9528d531": {
        "uid": "15ae967d9528d531"
      },
      "15b78c7bb0b1289c": {
        "uid": "15b78c7bb0b1289c"
      },
      "15ba94ae0f3567cc": {
        "uid": "15ba94ae0f3567cc"
      },
      "183ba0915aa7e0c6": {
        "uid": "183ba0915aa7e0c6"
      },
      "1a8787d5ac3c2faf": {
        "uid": "1a8787d5ac3c2faf"
      },
      "1b6fedf5a10e00b3": {
        "uid": "1b6fedf5a10e00b3"
      },
      "1d3a37f2f99c1d79": {
        "uid": "1d3a37f2f99c1d79"
      },
      "1dc1b34c3693ea0a": {
        "uid": "1dc1b34c3693ea0a"
      },
      "1dfdc28819143b61": {
        "uid": "1dfdc28819143b61"
      },
      "1e7b712f4c1a2174": {
        "uid": "1e7b712f4c1a2174"
      },
      "1f7dcabd98f331fe": {
        "uid": "1f7dcabd98f331fe"
      },
      "209d7079788ec8b6": {
        "uid": "209d7079788ec8b6"
      },
      "21c3a666ff63e628": {
        "uid": "21c3a666ff63e628"
      },
      "23a382d9c5934c7a": {
        "uid": "23a382d9c5934c7a"
      },
      "2433fad4af9b8c91": {
        "uid": "2433fad4af9b8c91"
      },
      "25e3583c5051e437": {
        "uid": "25e3583c5051e437"
      },
      "25eb9ebbb7f770c4": {
        "uid": "25eb9ebbb7f770c4"
      },
      "2689957139a0b7f3": {
        "uid": "2689957139a0b7f3"
      },
      "2764eadce35f57da": {
        "uid": "2764eadce35f57da"
      },
      "280f2bf613bf2356": {
        "uid": "280f2bf613bf2356"
      },
      "2c25bb954402149d": {
        "uid": "2c25bb954402149d"
      },
      "2ceb4a35b4cf3a82": {
        "uid": "2ceb4a35b4cf3a82"
      },
      "2d9ba0d32391edad": {
        "uid": "2d9ba0d32391edad"
      },
      "2e24514882f54cb5": {
        "uid": "2e24514882f54cb5"
      },
      "2e2f307791d02365": {
        "uid": "2e2f307791d02365"
      },
      "3028b167807cfbf4": {
        "uid": "3028b167807cfbf4"
      },
      "30613bfc396ce2d9": {
        "uid": "30613bfc396ce2d9"
      },
      "308b0b8c8ed4e4b2": {
        "uid": "308b0b8c8ed4e4b2"
      },
      "30aded38fc2a4e31": {
        "uid": "30aded38fc2a4e31"
      },
      "325dee48ddc82c6a": {
        "uid": "325dee48ddc82c6a"
      },
      "327403c74f242fc4": {
        "uid": "327403c74f242fc4"
      },
      "337908399ff8968d": {
        "uid": "337908399ff8968d"
      },
      "34d3ed1fe14ff7aa": {
        "uid": "34d3ed1fe14ff7aa"
      },
      "36845437c429a4dc": {
        "uid": "36845437c429a4dc"
      },
      "3894d304c65d5923": {
        "uid": "3894d304c65d5923"
      },
      "38a04576b770c322": {
        "uid": "38a04576b770c322"
      },
      "39f73309c9835f82": {
        "uid": "39f73309c9835f82"
      },
      "3ba45068e9680c30": {
        "uid": "3ba45068e9680c30"
      },
      "3d0181f3e81ef243": {
        "uid": "3d0181f3e81ef243"
      },
      "3d3363560523d9a8": {
        "uid": "3d3363560523d9a8"
      },
      "3d98fc87920f7e0c": {
        "uid": "3d98fc87920f7e0c"
      },
      "3e3d5879b907655c": {
        "uid": "3e3d5879b907655c"
      },
      "3e3e38b35680eeb3": {
        "uid": "3e3e38b35680eeb3"
      },
      "3e559963b46090f4": {
        "uid": "3e559963b46090f4"
      },
      "3f8fa0047ef8f923": {
        "uid": "3f8fa0047ef8f923"
      },
      "41e6eb3636b0dea6": {
        "uid": "41e6eb3636b0dea6"
      },
      "44f18460ff54c8ca": {
        "uid": "44f18460ff54c8ca"
      },
      "45eb8ba11385b6f8": {
        "uid": "45eb8ba11385b6f8"
      },
      "47b0d3c480c0499f": {
        "uid": "47b0d3c480c0499f"
      },
      "480ab1735929fbdf": {
        "uid": "480ab1735929fbdf"
      },
      "484d657a50c7d58b": {
        "uid": "484d657a50c7d58b"
      },
      "497ce103c8ff6039": {
        "uid": "497ce103c8ff6039"
      },
      "4b105e51e4c08180": {
        "uid": "4b105e51e4c08180"
      },
      "4f118d5e0b612b81": {
        "uid": "4f118d5e0b612b81"
      },
      "50a53578f3677bb3": {
        "uid": "50a53578f3677bb3"
      },
      "515d626ac13d7d49": {
        "uid": "515d626ac13d7d49"
      },
      "52dc8df6d849d1e7": {
        "uid": "52dc8df6d849d1e7"
      },
      "532967272335f916": {
        "uid": "532967272335f916"
      },
      "53ef06de121e27da": {
        "uid": "53ef06de121e27da"
      },
      "549834a2acb1f1f4": {
        "uid": "549834a2acb1f1f4"
      },
      "54e73de62df42630": {
        "uid": "54e73de62df42630"
      },
      "5501f3e4936798dc": {
        "uid": "5501f3e4936798dc"
      },
      "5549ebaf4b8de4a9": {
        "uid": "5549ebaf4b8de4a9"
      },
      "5770ae1f766e11be": {
        "uid": "5770ae1f766e11be"
      },
      "583f70e6235a536f": {
        "uid": "583f70e6235a536f"
      },
      "5bbed2dff9851a90": {
        "uid": "5bbed2dff9851a90"
      },
      "5bc62ebbe1547412": {
        "uid": "5bc62ebbe1547412"
      },
      "5c43f7ec7ed24f5c": {
        "uid": "5c43f7ec7ed24f5c"
      },
      "5ec5a92c865a392a": {
        "uid": "5ec5a92c865a392a"
      },
      "5f2f9653eecd1dcd": {
        "uid": "5f2f9653eecd1dcd"
      },
      "61028ee9d20fceb7": {
        "uid": "61028ee9d20fceb7"
      },
      "6284773c1c70faa0": {
        "uid": "6284773c1c70faa0"
      },
      "649f56b9ee432b59": {
        "uid": "649f56b9ee432b59"
      },
      "65bac3ee110db920": {
        "uid": "65bac3ee110db920"
      },
      "671f84e88e48385e": {
        "uid": "671f84e88e48385e"
      },
      "68951f264bf7e0af": {
        "uid": "68951f264bf7e0af"
      },
      "69ef442e4c072287": {
        "uid": "69ef442e4c072287"
      },
      "6a022651b53ff8e4": {
        "uid": "6a022651b53ff8e4"
      },
      "6aa28c09c1567f21": {
        "uid": "6aa28c09c1567f21"
      },
      "6cfd71f6b043c8ae": {
        "uid": "6cfd71f6b043c8ae"
      },
      "6e3bb276c237e728": {
        "uid": "6e3bb276c237e728"
      },
      "6e61365b7906364a": {
        "uid": "6e61365b7906364a"
      },
      "749660598055b524": {
        "uid": "749660598055b524"
      },
      "754a05bec8fc1059": {
        "uid": "754a05bec8fc1059"
      },
      "7b4401b3c14db5ae": {
        "uid": "7b4401b3c14db5ae"
      },
      "7e5b2cec850a2aff": {
        "uid": "7e5b2cec850a2aff"
      },
      "7f8285ca08a7c23d": {
        "uid": "7f8285ca08a7c23d"
      },
      "81f2828320160384": {
        "uid": "81f2828320160384"
      },
      "81f3673d45dbbd11": {
        "uid": "81f3673d45dbbd11"
      },
      "8214a075dd4d2e2a": {
        "uid": "8214a075dd4d2e2a"
      },
      "830cdf0b52f7e097": {
        "uid": "830cdf0b52f7e097"
      },
      "86b3ac39c3322df7": {
        "uid": "86b3ac39c3322df7"
      },
      "87a6eaef0181d2b0": {
        "uid": "87a6eaef0181d2b0"
      },
      "8b110191c4ec82e6": {
        "uid": "8b110191c4ec82e6"
      },
      "8b4acd6ccf915b89": {
        "uid": "8b4acd6ccf915b89"
      },
      "8c1f7ac2879400f3": {
        "uid": "8c1f7ac2879400f3"
      },
      "90e1114fbfc49b4c": {
        "uid": "90e1114fbfc49b4c"
      },
      "911414941b2523a0": {
        "uid": "911414941b2523a0"
      },
      "911bca702e73f25e": {
        "uid": "911bca702e73f25e"
      },
      "916088f8a25f68ab": {
        "uid": "916088f8a25f68ab"
      },
      "9379cba22d7ac999": {
        "uid": "9379cba22d7ac999"
      },
      "93a6a7d94f4918ff": {
        "uid": "93a6a7d94f4918ff"
      },
      "972d87a6873ec9b3": {
        "uid": "972d87a6873ec9b3"
      },
      "9e6c2caff1d3b44e": {
        "uid": "9e6c2caff1d3b44e"
      },
      "9ebd206bb5ff5c50": {
        "uid": "9ebd206bb5ff5c50"
      },
      "9f2dfe266d0926fd": {
        "uid": "9f2dfe266d0926fd"
      },
      "a43e0947ef6a39e6": {
        "uid": "a43e0947ef6a39e6"
      },
      "a7f10cfda0281de1": {
        "uid": "a7f10cfda0281de1"
      },
      "a9e4e4bf5bbd44e2": {
        "uid": "a9e4e4bf5bbd44e2"
      },
      "aa3387eff3195a54": {
        "uid": "aa3387eff3195a54"
      },
      "adb27aa50f322c9a": {
        "uid": "adb27aa50f322c9a"
      },
      "af94e1b49f9fd125": {
        "uid": "af94e1b49f9fd125"
      },
      "b072bc5fe4196a18": {
        "uid": "b072bc5fe4196a18"
      },
      "b3e25403b5a88b4c": {
        "uid": "b3e25403b5a88b4c"
      },
      "b4b9095a568f933b": {
        "uid": "b4b9095a568f933b"
      },
      "b548101a3c7f3918": {
        "uid": "b548101a3c7f3918"
      },
      "b606ffc3e12081e8": {
        "uid": "b606ffc3e12081e8"
      },
      "b62ddb49add38fb7": {
        "uid": "b62ddb49add38fb7"
      },
      "b6a56483a4bfda2e": {
        "uid": "b6a56483a4bfda2e"
      },
      "b81f90294ff8a0d0": {
        "uid": "b81f90294ff8a0d0"
      },
      "b84f6febc1eb8052": {
        "uid": "b84f6febc1eb8052"
      },
      "b8a7b1aafdd054f6": {
        "uid": "b8a7b1aafdd054f6"
      },
      "b956b65fac918b0d": {
        "uid": "b956b65fac918b0d"
      },
      "bc007c7eb12b758f": {
        "uid": "bc007c7eb12b758f"
      },
      "bca8480f5abd3622": {
        "uid": "bca8480f5abd3622"
      },
      "bd750af9cdc1205a": {
        "uid": "bd750af9cdc1205a"
      },
      "bd7703518ae1a7cc": {
        "uid": "bd7703518ae1a7cc"
      },
      "bde7ea1c0cae6b23": {
        "uid": "bde7ea1c0cae6b23"
      },
      "bdf748994d76821c": {
        "uid": "bdf748994d76821c"
      },
      "be36e54d93ecfde9": {
        "uid": "be36e54d93ecfde9"
      },
      "bfb56b4a3a4e3ae0": {
        "uid": "bfb56b4a3a4e3ae0"
      },
      "bfe18e93e86f6198": {
        "uid": "bfe18e93e86f6198"
      },
      "c0709a23b54fbdaa": {
        "uid": "c0709a23b54fbdaa"
      },
      "c0ba15209a6160bd": {
        "uid": "c0ba15209a6160bd"
      },
      "c1605be742d312f7": {
        "uid": "c1605be742d312f7"
      },
      "c262edfa406f1703": {
        "uid": "c262edfa406f1703"
      },
      "c408a16d75df00b1": {
        "uid": "c408a16d75df00b1"
      },
      "c5252199216940cc": {
        "uid": "c5252199216940cc"
      },
      "c66aede190d5feb5": {
        "uid": "c66aede190d5feb5"
      },
      "c681dabf34b510d1": {
        "uid": "c681dabf34b510d1"
      },
      "c6fe7dc836560d6c": {
        "uid": "c6fe7dc836560d6c"
      },
      "c80f59106768f8fc": {
        "uid": "c80f59106768f8fc"
      },
      "c885a4c52d41db0a": {
        "uid": "c885a4c52d41db0a"
      },
      "c95f2638084b7864": {
        "uid": "c95f2638084b7864"
      },
      "cb3f71bd93fe9387": {
        "uid": "cb3f71bd93fe9387"
      },
      "cc334b6cceb2c0c7": {
        "uid": "cc334b6cceb2c0c7"
      },
      "cccbd9bb94b15ee6": {
        "uid": "cccbd9bb94b15ee6"
      },
      "cd80f4cca6f54bbd": {
        "uid": "cd80f4cca6f54bbd"
      },
      "d16390349858cc0c": {
        "uid": "d16390349858cc0c"
      },
      "d2ec74f1f660690f": {
        "uid": "d2ec74f1f660690f"
      },
      "d36c84d5b707caa5": {
        "uid": "d36c84d5b707caa5"
      },
      "d37d52b418e0a03c": {
        "uid": "d37d52b418e0a03c"
      },
      "d391e126a6560e50": {
        "uid": "d391e126a6560e50"
      },
      "d478346a5082cb06": {
        "uid": "d478346a5082cb06"
      },
      "d6a4e972f89f58c2": {
        "uid": "d6a4e972f89f58c2"
      },
      "d78da08ba35da4da": {
        "uid": "d78da08ba35da4da"
      },
      "d845ae29dc6912c0": {
        "uid": "d845ae29dc6912c0"
      },
      "d914030007949409": {
        "uid": "d914030007949409"
      },
      "d971459e842f8ac0": {
        "uid": "d971459e842f8ac0"
      },
      "da737425476c1e9c": {
        "uid": "da737425476c1e9c"
      },
      "e0dcdae0eefc008d": {
        "uid": "e0dcdae0eefc008d"
      },
      "e1515b0aaf35f202": {
        "uid": "e1515b0aaf35f202"
      },
      "e1c3bea6d9deb895": {
        "uid": "e1c3bea6d9deb895"
      },
      "e2118a33ce759dcf": {
        "uid": "e2118a33ce759dcf"
      },
      "e35fd0231118b8d7": {
        "uid": "e35fd0231118b8d7"
      },
      "e756fa9295ad1eed": {
        "uid": "e756fa9295ad1eed"
      },
      "e7a0322647de571b": {
        "uid": "e7a0322647de571b"
      },
      "e901657bdc9a5c8e": {
        "uid": "e901657bdc9a5c8e"
      },
      "ea423a7a257965d5": {
        "uid": "ea423a7a257965d5"
      },
      "ea90a292408db4cd": {
        "uid": "ea90a292408db4cd"
      },
      "eb370cad0cdbdbbc": {
        "uid": "eb370cad0cdbdbbc"
      },
      "ec8c03effc5b296e": {
        "uid": "ec8c03effc5b296e"
      },
      "ec98d8bbf455e711": {
        "uid": "ec98d8bbf455e711"
      },
      "ecf284cb61b39042": {
        "uid": "ecf284cb61b39042"
      },
      "eea8905c611f6305": {
        "uid": "eea8905c611f6305"
      },
      "f134617bd286a050": {
        "uid": "f134617bd286a050"
      },
      "f3d4f734582a568c": {
        "uid": "f3d4f734582a568c"
      },
      "f560fbf3a1ff7e95": {
        "uid": "f560fbf3a1ff7e95"
      },
      "f62cb888146a1b0b": {
        "uid": "f62cb888146a1b0b"
      },
      "f65b770c17c75f32": {
        "uid": "f65b770c17c75f32"
      },
      "f7287e04ee25af0e": {
        "uid": "f7287e04ee25af0e"
      },
      "f8f1803efa21809f": {
        "uid": "f8f1803efa21809f"
      },
      "f94da096f90b989a": {
        "uid": "f94da096f90b989a"
      },
      "fac46268469de859": {
        "uid": "fac46268469de859"
      },
      "fbdeb72cd7b8eac3": {
        "uid": "fbdeb72cd7b8eac3"
      },
      "fd2e01c77a9563f3": {
        "uid": "fd2e01c77a9563f3"
      }
    },
    "rounds": [
      {
        "puzzleIndex": {
          "$numberLong": "0"
        },
        "startTime": {
          "$date": "2018-05-14T17:37:19.973Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "05cafc0b5c9ae78c": {
            "code": ".match",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "0879d2a167cef132": {
            "code": ".match",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "08bc05c40aee0ef6": {
            "code": "div",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "0af2c05d62662e75": {
            "code": ".match",
            "time": {
              "$numberLong": "20"
            },
            "correct": "Correct"
          },
          "0b51479a7fe6fc9d": {
            "code": "main .match",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "0b914dc18e1050e4": {
            "code": ".match",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "0c265c8b844334a6": {
            "code": ".match",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "0d6d4955615a97f6": {
            "code": ".match",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "0e3b3572c97b9718": {
            "code": ".match",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "0e7fa1fc555463c5": {
            "code": ".match",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "0e8ceb668d96c395": {
            "code": ".match",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "105cabccd21f71d9": {
            "code": "div",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "15ae967d9528d531": {
            "code": "div",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "15b78c7bb0b1289c": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "15ba94ae0f3567cc": {
            "code": "div",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": "div",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "1a8787d5ac3c2faf": {
            "code": ".match",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": "div",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "1d3a37f2f99c1d79": {
            "code": ".match",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": ".match",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "1dfdc28819143b61": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "1e7b712f4c1a2174": {
            "code": ".match",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": "main div",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "21c3a666ff63e628": {
            "code": ".match",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "23a382d9c5934c7a": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "2433fad4af9b8c91": {
            "code": ".match",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "25e3583c5051e437": {
            "code": ".match",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "25eb9ebbb7f770c4": {
            "code": ".match",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "2689957139a0b7f3": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "2764eadce35f57da": {
            "code": ".match",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "280f2bf613bf2356": {
            "code": "main div",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "2c25bb954402149d": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "2ceb4a35b4cf3a82": {
            "code": "div",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "2d9ba0d32391edad": {
            "code": "div",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "2e24514882f54cb5": {
            "code": ".match",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "2e2f307791d02365": {
            "code": "main div",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "3028b167807cfbf4": {
            "code": "div",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": ".match",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "308b0b8c8ed4e4b2": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": ".match",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": "div",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "327403c74f242fc4": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "337908399ff8968d": {
            "code": "div.match",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Correct"
          },
          "34d3ed1fe14ff7aa": {
            "code": "main\u003e.match",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "36845437c429a4dc": {
            "code": ".match",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "3894d304c65d5923": {
            "code": ".match",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "38a04576b770c322": {
            "code": ".match",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "39f73309c9835f82": {
            "code": ".match",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "3ba45068e9680c30": {
            "code": "main div",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "3d3363560523d9a8": {
            "code": "div",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "3d98fc87920f7e0c": {
            "code": "div",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": "main div",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": "main\u003ediv",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "3e559963b46090f4": {
            "code": "main \u003e .match",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "3f8fa0047ef8f923": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "41e6eb3636b0dea6": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": ".match",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "45eb8ba11385b6f8": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "47b0d3c480c0499f": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "480ab1735929fbdf": {
            "code": "div",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "484d657a50c7d58b": {
            "code": "main .match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "497ce103c8ff6039": {
            "code": "main\u003ediv",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "4b105e51e4c08180": {
            "code": "div",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "4f118d5e0b612b81": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "50a53578f3677bb3": {
            "code": ".match",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "515d626ac13d7d49": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "52dc8df6d849d1e7": {
            "code": ".match",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": "div",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "53ef06de121e27da": {
            "code": "div",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": ".match",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": "main div",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "5501f3e4936798dc": {
            "code": ".match",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "5549ebaf4b8de4a9": {
            "code": ".match",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "5770ae1f766e11be": {
            "code": "main div",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "5bbed2dff9851a90": {
            "code": "div",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "5bc62ebbe1547412": {
            "code": "div",
            "time": {
              "$numberLong": "20"
            },
            "correct": "Correct"
          },
          "5c43f7ec7ed24f5c": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "5ec5a92c865a392a": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "61028ee9d20fceb7": {
            "code": "match",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Incorrect"
          },
          "6249ddef7dd6094a": {
            "code": ".match",
            "time": {
              "$numberLong": "63"
            },
            "correct": "Correct"
          },
          "6284773c1c70faa0": {
            "code": "div",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "649f56b9ee432b59": {
            "code": ".match",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "65bac3ee110db920": {
            "code": "div",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "68951f264bf7e0af": {
            "code": "div",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "69ef442e4c072287": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "6a022651b53ff8e4": {
            "code": ".match",
            "time": {
              "$numberLong": "99"
            },
            "correct": "Correct"
          },
          "6aa28c09c1567f21": {
            "code": "main .match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "6cfd71f6b043c8ae": {
            "code": "div",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "6e3bb276c237e728": {
            "code": ".match",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "6e61365b7906364a": {
            "code": ".match",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "749660598055b524": {
            "code": "div",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "754a05bec8fc1059": {
            "code": ".match",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "7b4401b3c14db5ae": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "main \u003ediv",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "7f279e34bfbd28d8": {
            "code": "main div",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "7f8285ca08a7c23d": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "div",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "81f3673d45dbbd11": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "8214a075dd4d2e2a": {
            "code": "main .match",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "830cdf0b52f7e097": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "86b3ac39c3322df7": {
            "code": ".match",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "87a6eaef0181d2b0": {
            "code": ".match",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "8b110191c4ec82e6": {
            "code": ".match",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "8c1f7ac2879400f3": {
            "code": ".match",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "90e1114fbfc49b4c": {
            "code": "main .match",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": ".match",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "911bca702e73f25e": {
            "code": ".match",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "916088f8a25f68ab": {
            "code": "div",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "9379cba22d7ac999": {
            "code": ".match",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "9e6c2caff1d3b44e": {
            "code": ".match",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "9ebd206bb5ff5c50": {
            "code": ".match",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "9f2dfe266d0926fd": {
            "code": "div",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "main div",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "a9e4e4bf5bbd44e2": {
            "code": ".match",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "aa3387eff3195a54": {
            "code": "div",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "adb27aa50f322c9a": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "af94e1b49f9fd125": {
            "code": "div",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "b072bc5fe4196a18": {
            "code": "main \u003e div",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "b3e25403b5a88b4c": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "b4b9095a568f933b": {
            "code": ".match",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": "main .match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "b606ffc3e12081e8": {
            "code": ".match",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": "div",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": "div",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "b84f6febc1eb8052": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "b8a7b1aafdd054f6": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "b956b65fac918b0d": {
            "code": ".match",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "bc007c7eb12b758f": {
            "code": ".match",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": "main \u003e .match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": "div",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "bd7703518ae1a7cc": {
            "code": "div",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "bde7ea1c0cae6b23": {
            "code": "div",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "bdf748994d76821c": {
            "code": "div",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "be36e54d93ecfde9": {
            "code": "div",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "div",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": ".match",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "c0709a23b54fbdaa": {
            "code": ".match",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "c0ba15209a6160bd": {
            "code": "div",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "c1605be742d312f7": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "c262edfa406f1703": {
            "code": "main div",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "c408a16d75df00b1": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "c66aede190d5feb5": {
            "code": "div",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "c681dabf34b510d1": {
            "code": "div",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Correct"
          },
          "c6fe7dc836560d6c": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "c80f59106768f8fc": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "c885a4c52d41db0a": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "cb3f71bd93fe9387": {
            "code": ".match",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "cc334b6cceb2c0c7": {
            "code": "div",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": "div",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "cd80f4cca6f54bbd": {
            "code": "div",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "d16390349858cc0c": {
            "code": ".match",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "d2ec74f1f660690f": {
            "code": ".match",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "d36c84d5b707caa5": {
            "code": ".match",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "d37d52b418e0a03c": {
            "code": ".match",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "d391e126a6560e50": {
            "code": "div",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "d478346a5082cb06": {
            "code": "div",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "d6a4e972f89f58c2": {
            "code": "div",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "d78da08ba35da4da": {
            "code": "div",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "d845ae29dc6912c0": {
            "code": ".match",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "d914030007949409": {
            "code": ".match",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "d971459e842f8ac0": {
            "code": "main .match",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "da737425476c1e9c": {
            "code": ".match",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "e0dcdae0eefc008d": {
            "code": ".match",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "e1515b0aaf35f202": {
            "code": ".match",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "e1c3bea6d9deb895": {
            "code": ".match",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "e2118a33ce759dcf": {
            "code": "div",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "e35fd0231118b8d7": {
            "code": ".match",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "e756fa9295ad1eed": {
            "code": ".match",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "e7a0322647de571b": {
            "code": "div",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "e901657bdc9a5c8e": {
            "code": "main div",
            "time": {
              "$numberLong": "20"
            },
            "correct": "Correct"
          },
          "ea423a7a257965d5": {
            "code": ".match",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "ea90a292408db4cd": {
            "code": ".match",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": ".match",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": "div",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "ec98d8bbf455e711": {
            "code": "div",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": ".match",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": ".match",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": "div",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "f3d4f734582a568c": {
            "code": ".match",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "f560fbf3a1ff7e95": {
            "code": "div",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "f62cb888146a1b0b": {
            "code": "div",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "f65b770c17c75f32": {
            "code": "main div",
            "time": {
              "$numberLong": "99"
            },
            "correct": "Correct"
          },
          "f7287e04ee25af0e": {
            "code": ".match",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "f8f1803efa21809f": {
            "code": "div.match",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": ".match",
            "time": {
              "$numberLong": "89"
            },
            "correct": "Correct"
          },
          "fac46268469de859": {
            "code": "div",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "fbdeb72cd7b8eac3": {
            "code": ".match",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "fd2e01c77a9563f3": {
            "code": "div",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          }
        }
      },
      {
        "puzzleIndex": {
          "$numberLong": "1"
        },
        "startTime": {
          "$date": "2018-05-14T17:40:49.603Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": "article",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "05cafc0b5c9ae78c": {
            "code": "article",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "0879d2a167cef132": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "08bc05c40aee0ef6": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "0af2c05d62662e75": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "0b51479a7fe6fc9d": {
            "code": "main article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "0b914dc18e1050e4": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "0c265c8b844334a6": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "0d6d4955615a97f6": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "0e3b3572c97b9718": {
            "code": "article",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "0e7fa1fc555463c5": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "0e8ceb668d96c395": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": "article",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "105cabccd21f71d9": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "15ae967d9528d531": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "15b78c7bb0b1289c": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "15ba94ae0f3567cc": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "1a8787d5ac3c2faf": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "1d3a37f2f99c1d79": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": "article",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "1dfdc28819143b61": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "1e7b712f4c1a2174": {
            "code": "article",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "21c3a666ff63e628": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "23a382d9c5934c7a": {
            "code": "article",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "2433fad4af9b8c91": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "25e3583c5051e437": {
            "code": "main article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "25eb9ebbb7f770c4": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "2689957139a0b7f3": {
            "code": "article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "2764eadce35f57da": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "280f2bf613bf2356": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "2c25bb954402149d": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "2ceb4a35b4cf3a82": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "2d9ba0d32391edad": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "2e24514882f54cb5": {
            "code": "article",
            "time": {
              "$numberLong": "35"
            },
            "correct": "Correct"
          },
          "2e2f307791d02365": {
            "code": "article",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "3028b167807cfbf4": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "308b0b8c8ed4e4b2": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "327403c74f242fc4": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "337908399ff8968d": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "34d3ed1fe14ff7aa": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "36845437c429a4dc": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "3894d304c65d5923": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "38a04576b770c322": {
            "code": "article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "39f73309c9835f82": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "3ba45068e9680c30": {
            "code": "article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "3d3363560523d9a8": {
            "code": "article",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "3d98fc87920f7e0c": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": "article",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "3e559963b46090f4": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "3f8fa0047ef8f923": {
            "code": "main \u003e article",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "41e6eb3636b0dea6": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "45eb8ba11385b6f8": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "47b0d3c480c0499f": {
            "code": "article",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "480ab1735929fbdf": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "484d657a50c7d58b": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "497ce103c8ff6039": {
            "code": "article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "4b105e51e4c08180": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "4f118d5e0b612b81": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "50a53578f3677bb3": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "515d626ac13d7d49": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "52dc8df6d849d1e7": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "53ef06de121e27da": {
            "code": "article",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "5501f3e4936798dc": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "5549ebaf4b8de4a9": {
            "code": "article",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "5770ae1f766e11be": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "5bbed2dff9851a90": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "5bc62ebbe1547412": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "5c43f7ec7ed24f5c": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "5ec5a92c865a392a": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "61028ee9d20fceb7": {
            "code": "article",
            "time": {
              "$numberLong": "57"
            },
            "correct": "Correct"
          },
          "6249ddef7dd6094a": {
            "code": "article",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Correct"
          },
          "6284773c1c70faa0": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "649f56b9ee432b59": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "65bac3ee110db920": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "68951f264bf7e0af": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "69ef442e4c072287": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "6a022651b53ff8e4": {
            "code": "article",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "6aa28c09c1567f21": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "6cfd71f6b043c8ae": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "6e3bb276c237e728": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "6e61365b7906364a": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "749660598055b524": {
            "code": "article",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "754a05bec8fc1059": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "7b4401b3c14db5ae": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "main\u003earticle",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "7f279e34bfbd28d8": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "7f8285ca08a7c23d": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "81f3673d45dbbd11": {
            "code": "article",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "8214a075dd4d2e2a": {
            "code": "main article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "830cdf0b52f7e097": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "86b3ac39c3322df7": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "87a6eaef0181d2b0": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "8b110191c4ec82e6": {
            "code": "article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "8c1f7ac2879400f3": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "90e1114fbfc49b4c": {
            "code": "article",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "911bca702e73f25e": {
            "code": "article",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "916088f8a25f68ab": {
            "code": "article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "9379cba22d7ac999": {
            "code": "main \u003e article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": "article",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "9e6c2caff1d3b44e": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "9ebd206bb5ff5c50": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "9f2dfe266d0926fd": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "article",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "a9e4e4bf5bbd44e2": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "aa3387eff3195a54": {
            "code": "main article",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "adb27aa50f322c9a": {
            "code": "main article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "af94e1b49f9fd125": {
            "code": "article",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "b072bc5fe4196a18": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "b3e25403b5a88b4c": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "b4b9095a568f933b": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "b606ffc3e12081e8": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": "article",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "b84f6febc1eb8052": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "b8a7b1aafdd054f6": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "b956b65fac918b0d": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "bc007c7eb12b758f": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": "article",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "bd7703518ae1a7cc": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "bde7ea1c0cae6b23": {
            "code": "main article",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "bdf748994d76821c": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "be36e54d93ecfde9": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "c0709a23b54fbdaa": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "c0ba15209a6160bd": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "c1605be742d312f7": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "c262edfa406f1703": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "c408a16d75df00b1": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "c5252199216940cc": {
            "code": "article",
            "time": {
              "$numberLong": "79"
            },
            "correct": "Correct"
          },
          "c66aede190d5feb5": {
            "code": "article",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "c681dabf34b510d1": {
            "code": "article",
            "time": {
              "$numberLong": "69"
            },
            "correct": "Correct"
          },
          "c6fe7dc836560d6c": {
            "code": "article",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "c80f59106768f8fc": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "c885a4c52d41db0a": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "cb3f71bd93fe9387": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "cc334b6cceb2c0c7": {
            "code": "article",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "cd80f4cca6f54bbd": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "d16390349858cc0c": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "d2ec74f1f660690f": {
            "code": "article",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "d36c84d5b707caa5": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "d37d52b418e0a03c": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "d391e126a6560e50": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "d478346a5082cb06": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "d6a4e972f89f58c2": {
            "code": "article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "d78da08ba35da4da": {
            "code": "article",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "d845ae29dc6912c0": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "d914030007949409": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "d971459e842f8ac0": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "da737425476c1e9c": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "e0dcdae0eefc008d": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "e1515b0aaf35f202": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "e1c3bea6d9deb895": {
            "code": "article",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "e2118a33ce759dcf": {
            "code": "article",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "e35fd0231118b8d7": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "e756fa9295ad1eed": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "e7a0322647de571b": {
            "code": "article",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "e901657bdc9a5c8e": {
            "code": "main article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "ea423a7a257965d5": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "ea90a292408db4cd": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "ec98d8bbf455e711": {
            "code": "main article",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": "article",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "f3d4f734582a568c": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "f560fbf3a1ff7e95": {
            "code": "article",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "f62cb888146a1b0b": {
            "code": "article",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "f65b770c17c75f32": {
            "code": "article",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "f7287e04ee25af0e": {
            "code": "article",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "f8f1803efa21809f": {
            "code": "article",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": "article",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "fac46268469de859": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "fbdeb72cd7b8eac3": {
            "code": "article",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "fd2e01c77a9563f3": {
            "code": "article",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          }
        }
      },
      {
        "puzzleIndex": {
          "$numberLong": "2"
        },
        "startTime": {
          "$date": "2018-05-14T17:44:07.412Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": "",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "05cafc0b5c9ae78c": {
            "code": ".door:first-child",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Incorrect"
          },
          "0879d2a167cef132": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "08bc05c40aee0ef6": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "0af2c05d62662e75": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "0b51479a7fe6fc9d": {
            "code": "div:nth-child(3)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "0b914dc18e1050e4": {
            "code": ".behind .cellar .door .door cellar",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "0c265c8b844334a6": {
            "code": "div[class=\"behind cellar door\"], div[class=\"door cellar\"]",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Correct"
          },
          "0d6d4955615a97f6": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "0e3b3572c97b9718": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "0e7fa1fc555463c5": {
            "code": " .door.cellar",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "0e8ceb668d96c395": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "105cabccd21f71d9": {
            "code": "div.behind, div.door.cellar",
            "time": {
              "$numberLong": "35"
            },
            "correct": "Correct"
          },
          "15ae967d9528d531": {
            "code": ".behind, .door ~.door",
            "time": {
              "$numberLong": "71"
            },
            "correct": "Correct"
          },
          "15b78c7bb0b1289c": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Correct"
          },
          "15ba94ae0f3567cc": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "1a8787d5ac3c2faf": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "102"
            },
            "correct": "Correct"
          },
          "1d3a37f2f99c1d79": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "1dfdc28819143b61": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "1e7b712f4c1a2174": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": "div[class = \"c \"]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "21c3a666ff63e628": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "23a382d9c5934c7a": {
            "code": "[class=\"behind cellar door\"], [class=\"door cellar\"] ",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Correct"
          },
          "2433fad4af9b8c91": {
            "code": ".door.cellar ",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "25e3583c5051e437": {
            "code": "div[class ^=\"door cellar\"]",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "25eb9ebbb7f770c4": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "2689957139a0b7f3": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "2764eadce35f57da": {
            "code": ".behind",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "280f2bf613bf2356": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "2c25bb954402149d": {
            "code": "div.door.cellar",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "2ceb4a35b4cf3a82": {
            "code": ".behind, :nth-child(",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "2d9ba0d32391edad": {
            "code": "div[class = \"behind cellar door\"] , div[class = \"door cellar\"]",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "2e24514882f54cb5": {
            "code": ".door .cellar",
            "time": {
              "$numberLong": "127"
            },
            "correct": "Incorrect"
          },
          "2e2f307791d02365": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "3028b167807cfbf4": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "31"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "308b0b8c8ed4e4b2": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "327403c74f242fc4": {
            "code": "Ээээээээ",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "337908399ff8968d": {
            "code": ".door.cellar ",
            "time": {
              "$numberLong": "68"
            },
            "correct": "Correct"
          },
          "34d3ed1fe14ff7aa": {
            "code": "  .door.cellar ",
            "time": {
              "$numberLong": "79"
            },
            "correct": "Correct"
          },
          "36845437c429a4dc": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "3894d304c65d5923": {
            "code": ".door",
            "time": {
              "$numberLong": "131"
            },
            "correct": "Incorrect"
          },
          "38a04576b770c322": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "39f73309c9835f82": {
            "code": "div .door.cellar",
            "time": {
              "$numberLong": "98"
            },
            "correct": "Correct"
          },
          "3ba45068e9680c30": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": "",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "3d3363560523d9a8": {
            "code": "div .cellar .behind; .door",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "3d98fc87920f7e0c": {
            "code": "div.behind, div.cellar.door",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": ".door.cellar, .behind",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "3e559963b46090f4": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "3f8fa0047ef8f923": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "41"
            },
            "correct": "Correct"
          },
          "41e6eb3636b0dea6": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "45eb8ba11385b6f8": {
            "code": ".door \u003e ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "47b0d3c480c0499f": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "114"
            },
            "correct": "Correct"
          },
          "480ab1735929fbdf": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "67"
            },
            "correct": "Correct"
          },
          "484d657a50c7d58b": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "497ce103c8ff6039": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "4b105e51e4c08180": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "90"
            },
            "correct": "Correct"
          },
          "4f118d5e0b612b81": {
            "code": ".behind , div[class='door cellar",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "50a53578f3677bb3": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "67"
            },
            "correct": "Correct"
          },
          "515d626ac13d7d49": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "88"
            },
            "correct": "Correct"
          },
          "52dc8df6d849d1e7": {
            "code": "div[class*='cellar door'], div[class*='door '] ",
            "time": {
              "$numberLong": "122"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": "div.door,cellar ",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "53ef06de121e27da": {
            "code": "div.door.cellar",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": "",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "5501f3e4936798dc": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "5549ebaf4b8de4a9": {
            "code": ".cellar",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "5770ae1f766e11be": {
            "code": ".behind.cellar.door, .door.cellar ",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Correct"
          },
          "5bbed2dff9851a90": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "5bc62ebbe1547412": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "5c43f7ec7ed24f5c": {
            "code": ".behind, door cellar ",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "5ec5a92c865a392a": {
            "code": "div.door:empty.cellar",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "61028ee9d20fceb7": {
            "code": ".glass .door .behind .cellar .door",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "6284773c1c70faa0": {
            "code": "[class=\"behind cellar door\"], [class=\"door cellar\"]",
            "time": {
              "$numberLong": "94"
            },
            "correct": "Correct"
          },
          "649f56b9ee432b59": {
            "code": "div .cellar.door",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "65bac3ee110db920": {
            "code": "",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "671f84e88e48385e": {
            "code": "div.door.cellar",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "68951f264bf7e0af": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "69ef442e4c072287": {
            "code": ".door :first-child,  ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "6a022651b53ff8e4": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "6aa28c09c1567f21": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "6cfd71f6b043c8ae": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "6e3bb276c237e728": {
            "code": ".behind.cellar.door, .door.cellar",
            "time": {
              "$numberLong": "31"
            },
            "correct": "Correct"
          },
          "6e61365b7906364a": {
            "code": "div.behind,",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "749660598055b524": {
            "code": "div .cellar.door",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Correct"
          },
          "754a05bec8fc1059": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "104"
            },
            "correct": "Correct"
          },
          "7b4401b3c14db5ae": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "7f279e34bfbd28d8": {
            "code": "div[class$='cellar door'], div[class$='doo']",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "7f8285ca08a7c23d": {
            "code": "div.door.cellar",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "div.se",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "81f3673d45dbbd11": {
            "code": "div[class=\"behind cellar door\"],div[class=\"behind cellar door\"]",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "8214a075dd4d2e2a": {
            "code": ".door .behind ",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "830cdf0b52f7e097": {
            "code": ".behind.cellar, .door.cellar",
            "time": {
              "$numberLong": "56"
            },
            "correct": "Correct"
          },
          "86b3ac39c3322df7": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "133"
            },
            "correct": "Correct"
          },
          "87a6eaef0181d2b0": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "8b110191c4ec82e6": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Correct"
          },
          "8b4acd6ccf915b89": {
            "code": ".",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Incorrect"
          },
          "8c1f7ac2879400f3": {
            "code": "div .cellar.door ",
            "time": {
              "$numberLong": "104"
            },
            "correct": "Correct"
          },
          "90e1114fbfc49b4c": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "57"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "911bca702e73f25e": {
            "code": ".behind, .door.cellar",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "916088f8a25f68ab": {
            "code": "div .cellar.door",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "9379cba22d7ac999": {
            "code": ":nth-child(3),.door\u003ediv ",
            "time": {
              "$numberLong": "104"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "9e6c2caff1d3b44e": {
            "code": "",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "9ebd206bb5ff5c50": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Correct"
          },
          "9f2dfe266d0926fd": {
            "code": ".behind cellar door, .door.cellar",
            "time": {
              "$numberLong": "127"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": ".behind, div:nth-child(3",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Correct"
          },
          "a9e4e4bf5bbd44e2": {
            "code": ".door div:nth-child(1)",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "aa3387eff3195a54": {
            "code": "div .behind \u003e div door cella",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "adb27aa50f322c9a": {
            "code": "div.behind.cellar.door d",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "af94e1b49f9fd125": {
            "code": "div[class='door cellar']",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "b072bc5fe4196a18": {
            "code": ":nth-child(3), .door\u003ediv",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Correct"
          },
          "b3e25403b5a88b4c": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "b4b9095a568f933b": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": ".behind cellar door",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "b606ffc3e12081e8": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": "div.door.cellar",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": ".",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "b84f6febc1eb8052": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "b8a7b1aafdd054f6": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Correct"
          },
          "b956b65fac918b0d": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "bc007c7eb12b758f": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "bd7703518ae1a7cc": {
            "code": "div[class=\"door cellar\"], div[class=\"behind cellar door\"]",
            "time": {
              "$numberLong": "68"
            },
            "correct": "Correct"
          },
          "bde7ea1c0cae6b23": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "54"
            },
            "correct": "Correct"
          },
          "bdf748994d76821c": {
            "code": ".door .cellar ",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Incorrect"
          },
          "be36e54d93ecfde9": {
            "code": "div.behind, div.cellar",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "div.behind, div.cellar.door",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": "[class*=d]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "c0709a23b54fbdaa": {
            "code": ".cellar .door, .door .cella",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "c0ba15209a6160bd": {
            "code": "div .door.cellar ",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "c1605be742d312f7": {
            "code": ".behind, .",
            "time": {
              "$numberLong": "108"
            },
            "correct": "Incorrect"
          },
          "c262edfa406f1703": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "c408a16d75df00b1": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "20"
            },
            "correct": "Correct"
          },
          "c5252199216940cc": {
            "code": "",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Incorrect"
          },
          "c66aede190d5feb5": {
            "code": "div[class*=\"cellar door\"]",
            "time": {
              "$numberLong": "117"
            },
            "correct": "Incorrect"
          },
          "c6fe7dc836560d6c": {
            "code": ".behind cellar door .door cellar",
            "time": {
              "$numberLong": "127"
            },
            "correct": "Incorrect"
          },
          "c80f59106768f8fc": {
            "code": ".cellar .door",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "c885a4c52d41db0a": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "26"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": "",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "cb3f71bd93fe9387": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "cc334b6cceb2c0c7": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": ".[\"door cellar\"], .[\"behind door cellar\"]",
            "time": {
              "$numberLong": "82"
            },
            "correct": "Incorrect"
          },
          "cd80f4cca6f54bbd": {
            "code": "div .cellar.door",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Correct"
          },
          "d16390349858cc0c": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "d2ec74f1f660690f": {
            "code": ".door cellar",
            "time": {
              "$numberLong": "26"
            },
            "correct": "Incorrect"
          },
          "d36c84d5b707caa5": {
            "code": "",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Incorrect"
          },
          "d37d52b418e0a03c": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "d391e126a6560e50": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "d478346a5082cb06": {
            "code": ".behind-cellar-door, .door-cellar",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Incorrect"
          },
          "d6a4e972f89f58c2": {
            "code": "div .door.cellar",
            "time": {
              "$numberLong": "93"
            },
            "correct": "Correct"
          },
          "d78da08ba35da4da": {
            "code": ".\"behind cellar door\"  .\"door cellar\"",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "d845ae29dc6912c0": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Correct"
          },
          "d914030007949409": {
            "code": "div.behind.cellar.door, .door.door.cellar",
            "time": {
              "$numberLong": "54"
            },
            "correct": "Correct"
          },
          "d971459e842f8ac0": {
            "code": "",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "da737425476c1e9c": {
            "code": "",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "e0dcdae0eefc008d": {
            "code": ".door div, .door в ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "e1515b0aaf35f202": {
            "code": ".cellar.door",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "e1c3bea6d9deb895": {
            "code": ".cellar ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "e2118a33ce759dcf": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "e35fd0231118b8d7": {
            "code": ".door.cellar, .behind",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Correct"
          },
          "e756fa9295ad1eed": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "e7a0322647de571b": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "e901657bdc9a5c8e": {
            "code": ".behind + .door",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "ea423a7a257965d5": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "ea90a292408db4cd": {
            "code": "div.door.cellar",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "71"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": ".door.cellar, door",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Correct"
          },
          "ec98d8bbf455e711": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": ".cellar.door ",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": ".door.cellar ",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "f3d4f734582a568c": {
            "code": "",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "f560fbf3a1ff7e95": {
            "code": "div.door.cellar",
            "time": {
              "$numberLong": "20"
            },
            "correct": "Correct"
          },
          "f62cb888146a1b0b": {
            "code": "div.door.cellar",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Correct"
          },
          "f65b770c17c75f32": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Correct"
          },
          "f7287e04ee25af0e": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "f8f1803efa21809f": {
            "code": ".cellar.door ",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": ".cellar .behind, .door.cellar",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Correct"
          },
          "fac46268469de859": {
            "code": "div.cellar.door",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "fbdeb72cd7b8eac3": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "35"
            },
            "correct": "Correct"
          },
          "fd2e01c77a9563f3": {
            "code": ".door.cellar",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          }
        }
      },
      {
        "puzzleIndex": {
          "$numberLong": "3"
        },
        "startTime": {
          "$date": "2018-05-14T17:49:11.260Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": "article :nth-child(n)",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": ":nth-child(2n),:nth-child(n)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "05cafc0b5c9ae78c": {
            "code": "article",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "0879d2a167cef132": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "08bc05c40aee0ef6": {
            "code": "article:nth-child(n) ",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Incorrect"
          },
          "0af2c05d62662e75": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "0b51479a7fe6fc9d": {
            "code": "*:not(article",
            "time": {
              "$numberLong": "114"
            },
            "correct": "Correct"
          },
          "0b914dc18e1050e4": {
            "code": "div, a, span",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "0c265c8b844334a6": {
            "code": ":nth-child()",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "0d6d4955615a97f6": {
            "code": ":not(article",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "0e3b3572c97b9718": {
            "code": "article *",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "0e7fa1fc555463c5": {
            "code": "article  *",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "0e8ceb668d96c395": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "31"
            },
            "correct": "Correct"
          },
          "105cabccd21f71d9": {
            "code": "article:nth-child(2),",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "15ae967d9528d531": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "15b78c7bb0b1289c": {
            "code": "article *",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "15ba94ae0f3567cc": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "1a8787d5ac3c2faf": {
            "code": "article *",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": "article \u003e all",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "1d3a37f2f99c1d79": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "1dfdc28819143b61": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "1e7b712f4c1a2174": {
            "code": "article *",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": "article *",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": "",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "21c3a666ff63e628": {
            "code": "article div, span, ",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "23a382d9c5934c7a": {
            "code": "*",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "2433fad4af9b8c91": {
            "code": "div[]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "25e3583c5051e437": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "91"
            },
            "correct": "Correct"
          },
          "25eb9ebbb7f770c4": {
            "code": "article *",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "2689957139a0b7f3": {
            "code": "article:first-child",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "2764eadce35f57da": {
            "code": "",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "280f2bf613bf2356": {
            "code": "*:not(article)",
            "time": {
              "$numberLong": "80"
            },
            "correct": "Correct"
          },
          "2c25bb954402149d": {
            "code": "article *",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "2ceb4a35b4cf3a82": {
            "code": "div, a, :nth-child(2), :nth-child(3)",
            "time": {
              "$numberLong": "96"
            },
            "correct": "Correct"
          },
          "2d9ba0d32391edad": {
            "code": "div, :nth-child(3), :nth-child(2), a",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "2e24514882f54cb5": {
            "code": "",
            "time": {
              "$numberLong": "133"
            },
            "correct": "Incorrect"
          },
          "2e2f307791d02365": {
            "code": ":not(article)",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Correct"
          },
          "3028b167807cfbf4": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "105"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": "a, div, span, article:nth-child(3)",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "308b0b8c8ed4e4b2": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": "",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "327403c74f242fc4": {
            "code": "article *",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "337908399ff8968d": {
            "code": "article^",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "34d3ed1fe14ff7aa": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "36845437c429a4dc": {
            "code": "article *",
            "time": {
              "$numberLong": "69"
            },
            "correct": "Correct"
          },
          "3894d304c65d5923": {
            "code": "div, a",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Incorrect"
          },
          "38a04576b770c322": {
            "code": ":not(article)",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "39f73309c9835f82": {
            "code": "article\u003e",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "3ba45068e9680c30": {
            "code": "article *",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "3d3363560523d9a8": {
            "code": "div,a,a",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "3d98fc87920f7e0c": {
            "code": "article *",
            "time": {
              "$numberLong": "54"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": ":not(article)",
            "time": {
              "$numberLong": "107"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": "article\u003e:nth-child(n)",
            "time": {
              "$numberLong": "52"
            },
            "correct": "Correct"
          },
          "3e559963b46090f4": {
            "code": "div, span, a",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "3f8fa0047ef8f923": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "41e6eb3636b0dea6": {
            "code": "article \u003e*",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": "article:nth-child()",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "45eb8ba11385b6f8": {
            "code": ".article ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "47b0d3c480c0499f": {
            "code": "article:nth-child(",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "480ab1735929fbdf": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "484d657a50c7d58b": {
            "code": "article *",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "497ce103c8ff6039": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "4b105e51e4c08180": {
            "code": "article:nth-child(n)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "4f118d5e0b612b81": {
            "code": "article :nth-child(n)",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "50a53578f3677bb3": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "515d626ac13d7d49": {
            "code": "article *",
            "time": {
              "$numberLong": "69"
            },
            "correct": "Correct"
          },
          "52dc8df6d849d1e7": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": "article div,span, p   ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "53ef06de121e27da": {
            "code": "article \u003e*",
            "time": {
              "$numberLong": "96"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": ":not(article)",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "5501f3e4936798dc": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "5549ebaf4b8de4a9": {
            "code": "div, nth-child[3]",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "5770ae1f766e11be": {
            "code": "article *",
            "time": {
              "$numberLong": "118"
            },
            "correct": "Correct"
          },
          "583f70e6235a536f": {
            "code": "",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Incorrect"
          },
          "5bbed2dff9851a90": {
            "code": "*^not",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "5bc62ebbe1547412": {
            "code": "article:only-child(",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "5c43f7ec7ed24f5c": {
            "code": "aricle",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "5ec5a92c865a392a": {
            "code": "article *",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "61028ee9d20fceb7": {
            "code": "div, a",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "6284773c1c70faa0": {
            "code": "div, :nth-last-child(2), :nth-last-child(3),",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "649f56b9ee432b59": {
            "code": "articlelenth-child()",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "65bac3ee110db920": {
            "code": "article\u003e:nth-child(1),:nth-child(2),:nth-child(3)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "671f84e88e48385e": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "68951f264bf7e0af": {
            "code": "article:nth-child",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "69ef442e4c072287": {
            "code": "div:first-child,div :nth-child(2),div :nth-child(3), div :nth-child(4)",
            "time": {
              "$numberLong": "103"
            },
            "correct": "Correct"
          },
          "6a022651b53ff8e4": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "6aa28c09c1567f21": {
            "code": "article *",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "6cfd71f6b043c8ae": {
            "code": "article *",
            "time": {
              "$numberLong": "120"
            },
            "correct": "Correct"
          },
          "6e3bb276c237e728": {
            "code": "article *",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "6e61365b7906364a": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "749660598055b524": {
            "code": "article *",
            "time": {
              "$numberLong": "99"
            },
            "correct": "Correct"
          },
          "754a05bec8fc1059": {
            "code": "aricle \u003e ",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Incorrect"
          },
          "7b4401b3c14db5ae": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "article\u003e:nth-child(n)",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "7f8285ca08a7c23d": {
            "code": "article \u003e*",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "article *",
            "time": {
              "$numberLong": "94"
            },
            "correct": "Correct"
          },
          "81f3673d45dbbd11": {
            "code": "article:nth-child(1),article:nth-child(2)article:nth-child(1)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "8214a075dd4d2e2a": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Correct"
          },
          "830cdf0b52f7e097": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "86b3ac39c3322df7": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "87a6eaef0181d2b0": {
            "code": "*:not(article)",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "8b110191c4ec82e6": {
            "code": "article \u003e div, article \u003e span, article \u003e p, article \u003e a ",
            "time": {
              "$numberLong": "111"
            },
            "correct": "Incorrect"
          },
          "8b4acd6ccf915b89": {
            "code": "article p",
            "time": {
              "$numberLong": "70"
            },
            "correct": "Incorrect"
          },
          "8c1f7ac2879400f3": {
            "code": "article *",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "90e1114fbfc49b4c": {
            "code": "article *",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": "",
            "time": {
              "$numberLong": "76"
            },
            "correct": "Incorrect"
          },
          "911bca702e73f25e": {
            "code": "article *",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "916088f8a25f68ab": {
            "code": "article *",
            "time": {
              "$numberLong": "54"
            },
            "correct": "Correct"
          },
          "9379cba22d7ac999": {
            "code": "article *",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": "articl",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "9e6c2caff1d3b44e": {
            "code": "",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "9ebd206bb5ff5c50": {
            "code": ":not(article)",
            "time": {
              "$numberLong": "96"
            },
            "correct": "Correct"
          },
          "9f2dfe266d0926fd": {
            "code": "article *",
            "time": {
              "$numberLong": "20"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": "article *",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "article *",
            "time": {
              "$numberLong": "118"
            },
            "correct": "Correct"
          },
          "a9e4e4bf5bbd44e2": {
            "code": "",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "aa3387eff3195a54": {
            "code": "article \u003e div, span, p, a",
            "time": {
              "$numberLong": "122"
            },
            "correct": "Incorrect"
          },
          "adb27aa50f322c9a": {
            "code": "article *",
            "time": {
              "$numberLong": "55"
            },
            "correct": "Correct"
          },
          "af94e1b49f9fd125": {
            "code": ":not(article",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "b072bc5fe4196a18": {
            "code": "article *",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "b3e25403b5a88b4c": {
            "code": "",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Incorrect"
          },
          "b4b9095a568f933b": {
            "code": "article *",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": "article *",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "b606ffc3e12081e8": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "7"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": "article \u003e*",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": "",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Incorrect"
          },
          "b84f6febc1eb8052": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "b8a7b1aafdd054f6": {
            "code": "article *",
            "time": {
              "$numberLong": "115"
            },
            "correct": "Correct"
          },
          "b956b65fac918b0d": {
            "code": "*:not(article)",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "bc007c7eb12b758f": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": "article:nth",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "bd7703518ae1a7cc": {
            "code": "articl\u003espan,div",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "bde7ea1c0cae6b23": {
            "code": "article \u003e ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "bdf748994d76821c": {
            "code": "div ",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "be36e54d93ecfde9": {
            "code": "a, p, span, div",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "article *",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": "article *",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "c0709a23b54fbdaa": {
            "code": "article *",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "c0ba15209a6160bd": {
            "code": "aritcle",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "c1605be742d312f7": {
            "code": "div:first-child,div :nth-child(2),div :nth-child(3), div :nth-child(4)",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Correct"
          },
          "c262edfa406f1703": {
            "code": "",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "c408a16d75df00b1": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "c5252199216940cc": {
            "code": "Article *",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Correct"
          },
          "c66aede190d5feb5": {
            "code": "div, span,a, ",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "c681dabf34b510d1": {
            "code": "article *",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "c6fe7dc836560d6c": {
            "code": "article\u003ediv",
            "time": {
              "$numberLong": "131"
            },
            "correct": "Incorrect"
          },
          "c80f59106768f8fc": {
            "code": ":not(article)",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "c885a4c52d41db0a": {
            "code": "article *",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": "article",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Incorrect"
          },
          "cb3f71bd93fe9387": {
            "code": "article *",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "cc334b6cceb2c0c7": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": "article :nth-child(1)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "cd80f4cca6f54bbd": {
            "code": "article *",
            "time": {
              "$numberLong": "86"
            },
            "correct": "Correct"
          },
          "d16390349858cc0c": {
            "code": "article \u003e*",
            "time": {
              "$numberLong": "76"
            },
            "correct": "Correct"
          },
          "d2ec74f1f660690f": {
            "code": "article",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "d36c84d5b707caa5": {
            "code": "article  *",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "d37d52b418e0a03c": {
            "code": "div, span, a",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "d391e126a6560e50": {
            "code": "article",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "d478346a5082cb06": {
            "code": "article *",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "d6a4e972f89f58c2": {
            "code": "article div",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Incorrect"
          },
          "d78da08ba35da4da": {
            "code": "article *  ",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Correct"
          },
          "d845ae29dc6912c0": {
            "code": "article *",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "d914030007949409": {
            "code": "article *",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "d971459e842f8ac0": {
            "code": "div, span, a, article:nth-child(3)",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "da737425476c1e9c": {
            "code": "div, span, ar",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "e0dcdae0eefc008d": {
            "code": "article *",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Correct"
          },
          "e1515b0aaf35f202": {
            "code": "article\u003ediv",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Incorrect"
          },
          "e1c3bea6d9deb895": {
            "code": "articl.*",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "e2118a33ce759dcf": {
            "code": "article",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "e35fd0231118b8d7": {
            "code": "article div",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "e756fa9295ad1eed": {
            "code": "article *",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "e7a0322647de571b": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "e901657bdc9a5c8e": {
            "code": ":not article",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "ea423a7a257965d5": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "ea90a292408db4cd": {
            "code": "article *",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": "article *",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": "article div, article span, article p, article a",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "ec98d8bbf455e711": {
            "code": "article \u003e *",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": "article *",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": "article *",
            "time": {
              "$numberLong": "6"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": "article *",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "f3d4f734582a568c": {
            "code": "",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "f560fbf3a1ff7e95": {
            "code": "article *",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "f62cb888146a1b0b": {
            "code": "article *",
            "time": {
              "$numberLong": "56"
            },
            "correct": "Correct"
          },
          "f65b770c17c75f32": {
            "code": "article *",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "f7287e04ee25af0e": {
            "code": "article *",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "f8f1803efa21809f": {
            "code": "*:not(article)",
            "time": {
              "$numberLong": "111"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": "article *",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Correct"
          },
          "fac46268469de859": {
            "code": "article:nth-c",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "fbdeb72cd7b8eac3": {
            "code": "article *",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "fd2e01c77a9563f3": {
            "code": "article\u003e*",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          }
        }
      },
      {
        "puzzleIndex": {
          "$numberLong": "4"
        },
        "startTime": {
          "$date": "2018-05-14T17:53:44.560Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": "",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "053b976e830f1380": {
            "code": "",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "05cafc0b5c9ae78c": {
            "code": "*",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Incorrect"
          },
          "0879d2a167cef132": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "08bc05c40aee0ef6": {
            "code": "[data-anchor]+div ",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "0af2c05d62662e75": {
            "code": "div+div",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "0b51479a7fe6fc9d": {
            "code": "div[data-anchor].",
            "time": {
              "$numberLong": "126"
            },
            "correct": "Incorrect"
          },
          "0b914dc18e1050e4": {
            "code": "div[data-anchor] ~ div",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "0c265c8b844334a6": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "0d6d4955615a97f6": {
            "code": "div[attr|=\"data-anchor\"] + div",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "0e3b3572c97b9718": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "0e7fa1fc555463c5": {
            "code": "div[attr=\"data-anchor\"]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "0e8ceb668d96c395": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": "div[data=\"anchor\"]+div",
            "time": {
              "$numberLong": "126"
            },
            "correct": "Incorrect"
          },
          "105cabccd21f71d9": {
            "code": "div[6]",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Incorrect"
          },
          "15ae967d9528d531": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "15b78c7bb0b1289c": {
            "code": "div [data-anchor] +div",
            "time": {
              "$numberLong": "57"
            },
            "correct": "Correct"
          },
          "15ba94ae0f3567cc": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "102"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Correct"
          },
          "1a8787d5ac3c2faf": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "80"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "120"
            },
            "correct": "Correct"
          },
          "1d3a37f2f99c1d79": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Correct"
          },
          "1dfdc28819143b61": {
            "code": "",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Incorrect"
          },
          "1e7b712f4c1a2174": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "78"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": "div[data-anchor]+ div",
            "time": {
              "$numberLong": "80"
            },
            "correct": "Correct"
          },
          "21c3a666ff63e628": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "23a382d9c5934c7a": {
            "code": "",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "2433fad4af9b8c91": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "25e3583c5051e437": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "25eb9ebbb7f770c4": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Correct"
          },
          "2689957139a0b7f3": {
            "code": "",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "2764eadce35f57da": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "280f2bf613bf2356": {
            "code": "div:nth-child()",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "2c25bb954402149d": {
            "code": "",
            "time": {
              "$numberLong": "123"
            },
            "correct": "Incorrect"
          },
          "2ceb4a35b4cf3a82": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "103"
            },
            "correct": "Correct"
          },
          "2d9ba0d32391edad": {
            "code": ".data-anchor ",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "2e24514882f54cb5": {
            "code": "",
            "time": {
              "$numberLong": "111"
            },
            "correct": "Incorrect"
          },
          "2e2f307791d02365": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Correct"
          },
          "3028b167807cfbf4": {
            "code": "[data-anchor] +div",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": "div[data + div",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "308b0b8c8ed4e4b2": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "41"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "90"
            },
            "correct": "Correct"
          },
          "327403c74f242fc4": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "50"
            },
            "correct": "Correct"
          },
          "337908399ff8968d": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "98"
            },
            "correct": "Correct"
          },
          "34d3ed1fe14ff7aa": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "57"
            },
            "correct": "Correct"
          },
          "36845437c429a4dc": {
            "code": "",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Incorrect"
          },
          "3894d304c65d5923": {
            "code": "div[data-anchor] +div",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Correct"
          },
          "38a04576b770c322": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "109"
            },
            "correct": "Correct"
          },
          "39f73309c9835f82": {
            "code": "div [data-anchor]+div",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "3ba45068e9680c30": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "3d3363560523d9a8": {
            "code": "#data-anchor + div",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "3d98fc87920f7e0c": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "20"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "112"
            },
            "correct": "Correct"
          },
          "3e559963b46090f4": {
            "code": "",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Incorrect"
          },
          "3f8fa0047ef8f923": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "41e6eb3636b0dea6": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "76"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "103"
            },
            "correct": "Correct"
          },
          "45eb8ba11385b6f8": {
            "code": ":(",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "47b0d3c480c0499f": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "480ab1735929fbdf": {
            "code": "div[data-anchor]",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "484d657a50c7d58b": {
            "code": "*[data-anchor]+div",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "497ce103c8ff6039": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "105"
            },
            "correct": "Correct"
          },
          "4b105e51e4c08180": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "4f118d5e0b612b81": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Correct"
          },
          "50a53578f3677bb3": {
            "code": "",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "515d626ac13d7d49": {
            "code": ".data-anchor\u003efirst.child",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Incorrect"
          },
          "52dc8df6d849d1e7": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "26"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": "",
            "time": {
              "$numberLong": "115"
            },
            "correct": "Incorrect"
          },
          "53ef06de121e27da": {
            "code": "div+ [data-anchor] +div",
            "time": {
              "$numberLong": "50"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": "*[data-anchor] + div",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "50"
            },
            "correct": "Correct"
          },
          "5501f3e4936798dc": {
            "code": "[data-anchor]+ div",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Correct"
          },
          "5549ebaf4b8de4a9": {
            "code": "",
            "time": {
              "$numberLong": "117"
            },
            "correct": "Incorrect"
          },
          "5770ae1f766e11be": {
            "code": "div.data-ancor + div",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Incorrect"
          },
          "5bbed2dff9851a90": {
            "code": "div[data-anchor]",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "5bc62ebbe1547412": {
            "code": "div",
            "time": {
              "$numberLong": "122"
            },
            "correct": "Incorrect"
          },
          "5c43f7ec7ed24f5c": {
            "code": "d",
            "time": {
              "$numberLong": "131"
            },
            "correct": "Incorrect"
          },
          "5ec5a92c865a392a": {
            "code": "div[data-anchor]+ div ",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "61028ee9d20fceb7": {
            "code": "div[d]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "6284773c1c70faa0": {
            "code": "",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Incorrect"
          },
          "649f56b9ee432b59": {
            "code": "",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "65bac3ee110db920": {
            "code": "",
            "time": {
              "$numberLong": "115"
            },
            "correct": "Incorrect"
          },
          "671f84e88e48385e": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "68951f264bf7e0af": {
            "code": "div+++++",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Incorrect"
          },
          "69ef442e4c072287": {
            "code": "[data-anchor]~div ",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "6a022651b53ff8e4": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Correct"
          },
          "6aa28c09c1567f21": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Correct"
          },
          "6cfd71f6b043c8ae": {
            "code": "div[data-anchor]+div ",
            "time": {
              "$numberLong": "131"
            },
            "correct": "Correct"
          },
          "6e3bb276c237e728": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "61"
            },
            "correct": "Correct"
          },
          "6e61365b7906364a": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Correct"
          },
          "749660598055b524": {
            "code": "э",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "754a05bec8fc1059": {
            "code": "data-anchor \u003e div",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "7b4401b3c14db5ae": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "7f8285ca08a7c23d": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "72"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Correct"
          },
          "81f3673d45dbbd11": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "8214a075dd4d2e2a": {
            "code": ".data-anchor ~ data ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "830cdf0b52f7e097": {
            "code": "div[data-anchor]:nth-chold",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "86b3ac39c3322df7": {
            "code": "",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "87a6eaef0181d2b0": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Correct"
          },
          "8b110191c4ec82e6": {
            "code": "data-anchor + ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "8c1f7ac2879400f3": {
            "code": "div[data-anchor] + div ",
            "time": {
              "$numberLong": "90"
            },
            "correct": "Correct"
          },
          "90e1114fbfc49b4c": {
            "code": "div[data-anchor] + *",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": "div.data-archor~div",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Incorrect"
          },
          "911bca702e73f25e": {
            "code": ".data-anchor",
            "time": {
              "$numberLong": "111"
            },
            "correct": "Incorrect"
          },
          "916088f8a25f68ab": {
            "code": "[data-anchor]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "9379cba22d7ac999": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "104"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": "",
            "time": {
              "$numberLong": "126"
            },
            "correct": "Incorrect"
          },
          "972d87a6873ec9b3": {
            "code": "div",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Incorrect"
          },
          "9e6c2caff1d3b44e": {
            "code": "",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Incorrect"
          },
          "9ebd206bb5ff5c50": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "54"
            },
            "correct": "Correct"
          },
          "9f2dfe266d0926fd": {
            "code": "[data-anchor]  + div",
            "time": {
              "$numberLong": "102"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "26"
            },
            "correct": "Correct"
          },
          "a9e4e4bf5bbd44e2": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "122"
            },
            "correct": "Correct"
          },
          "aa3387eff3195a54": {
            "code": "div :nth-child(6)",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "adb27aa50f322c9a": {
            "code": ".data-anchor ~div",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "af94e1b49f9fd125": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "b072bc5fe4196a18": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Correct"
          },
          "b3e25403b5a88b4c": {
            "code": "",
            "time": {
              "$numberLong": "108"
            },
            "correct": "Incorrect"
          },
          "b4b9095a568f933b": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "82"
            },
            "correct": "Correct"
          },
          "b606ffc3e12081e8": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": "",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "b84f6febc1eb8052": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "26"
            },
            "correct": "Correct"
          },
          "b8a7b1aafdd054f6": {
            "code": "(((",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "b956b65fac918b0d": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "bc007c7eb12b758f": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "88"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "50"
            },
            "correct": "Correct"
          },
          "bd7703518ae1a7cc": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Correct"
          },
          "bde7ea1c0cae6b23": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Correct"
          },
          "bdf748994d76821c": {
            "code": "div  ",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Incorrect"
          },
          "be36e54d93ecfde9": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Correct"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "[data-anchor] + div",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": "div \u003e nth-child(6)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "c0709a23b54fbdaa": {
            "code": "[.data-anchor] + div",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "c0ba15209a6160bd": {
            "code": "nth-child(6)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "c1605be742d312f7": {
            "code": "div",
            "time": {
              "$numberLong": "115"
            },
            "correct": "Incorrect"
          },
          "c262edfa406f1703": {
            "code": "",
            "time": {
              "$numberLong": "120"
            },
            "correct": "Incorrect"
          },
          "c408a16d75df00b1": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "64"
            },
            "correct": "Correct"
          },
          "c66aede190d5feb5": {
            "code": "[data-anchor]",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "c681dabf34b510d1": {
            "code": "Div[data-anchor].nextElementSibling",
            "time": {
              "$numberLong": "108"
            },
            "correct": "Incorrect"
          },
          "c6fe7dc836560d6c": {
            "code": "div::data-anchor",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Incorrect"
          },
          "c80f59106768f8fc": {
            "code": ".data-anchor + div",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "c885a4c52d41db0a": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": " ",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "cb3f71bd93fe9387": {
            "code": ".data-anchor  div",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Incorrect"
          },
          "cc334b6cceb2c0c7": {
            "code": "div[data-anchor]+*",
            "time": {
              "$numberLong": "35"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": "div",
            "time": {
              "$numberLong": "109"
            },
            "correct": "Incorrect"
          },
          "cd80f4cca6f54bbd": {
            "code": "div:not(data-anchor)",
            "time": {
              "$numberLong": "111"
            },
            "correct": "Incorrect"
          },
          "d16390349858cc0c": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Correct"
          },
          "d2ec74f1f660690f": {
            "code": "nth-child(6)",
            "time": {
              "$numberLong": "57"
            },
            "correct": "Incorrect"
          },
          "d36c84d5b707caa5": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "d37d52b418e0a03c": {
            "code": "div[attr=\"data-anchor\"] + div",
            "time": {
              "$numberLong": "127"
            },
            "correct": "Incorrect"
          },
          "d391e126a6560e50": {
            "code": "div",
            "time": {
              "$numberLong": "78"
            },
            "correct": "Incorrect"
          },
          "d478346a5082cb06": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "d6a4e972f89f58c2": {
            "code": "[name=\"data-anchor\"]\u003ediv",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "d78da08ba35da4da": {
            "code": "div :nth-child(6)",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "d845ae29dc6912c0": {
            "code": "div[attr=\"data-anchor\"]",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "d914030007949409": {
            "code": "div[data-anchor]",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "d971459e842f8ac0": {
            "code": "",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "da737425476c1e9c": {
            "code": ".data-anchor + div",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "e0dcdae0eefc008d": {
            "code": "div data-anchor ~ div",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "e1515b0aaf35f202": {
            "code": ".data-anchor + div",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Incorrect"
          },
          "e1c3bea6d9deb895": {
            "code": "[div=\"data-anchor\"]+div",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "e2118a33ce759dcf": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "96"
            },
            "correct": "Correct"
          },
          "e35fd0231118b8d7": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "e756fa9295ad1eed": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "100"
            },
            "correct": "Correct"
          },
          "e7a0322647de571b": {
            "code": "НЕЗНАю",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "e901657bdc9a5c8e": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "ea423a7a257965d5": {
            "code": "div[data-anchor]+*",
            "time": {
              "$numberLong": "55"
            },
            "correct": "Correct"
          },
          "ea90a292408db4cd": {
            "code": "[data-anchor]+div",
            "time": {
              "$numberLong": "41"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": "data-anchor+div",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "ec98d8bbf455e711": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": "[data-anchor] +div",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "72"
            },
            "correct": "Correct"
          },
          "f3d4f734582a568c": {
            "code": "",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "f560fbf3a1ff7e95": {
            "code": "div[data-anchor]+div",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "f62cb888146a1b0b": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "122"
            },
            "correct": "Correct"
          },
          "f65b770c17c75f32": {
            "code": "div + div",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "f7287e04ee25af0e": {
            "code": "div[data-anchor div",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "f8f1803efa21809f": {
            "code": "div[data-anchor] + div",
            "time": {
              "$numberLong": "102"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": "\\",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "fac46268469de859": {
            "code": "div.data-anchor",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "fbdeb72cd7b8eac3": {
            "code": ".data-anchor + div",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "fd2e01c77a9563f3": {
            "code": "",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          }
        }
      },
      {
        "puzzleIndex": {
          "$numberLong": "5"
        },
        "startTime": {
          "$date": "2018-05-14T17:57:20.326Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": ":checked",
            "time": {
              "$numberLong": "62"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": "",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "05cafc0b5c9ae78c": {
            "code": "",
            "time": {
              "$numberLong": "108"
            },
            "correct": "Incorrect"
          },
          "0879d2a167cef132": {
            "code": "*:checked",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "08bc05c40aee0ef6": {
            "code": ":checked",
            "time": {
              "$numberLong": "4"
            },
            "correct": "Correct"
          },
          "0af2c05d62662e75": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "0b51479a7fe6fc9d": {
            "code": "",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "0b914dc18e1050e4": {
            "code": "input:checked",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "0c265c8b844334a6": {
            "code": ":checked",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Correct"
          },
          "0d6d4955615a97f6": {
            "code": ":checked ",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "0e3b3572c97b9718": {
            "code": "main",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "0e7fa1fc555463c5": {
            "code": ":checked",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "0e8ceb668d96c395": {
            "code": ":checked",
            "time": {
              "$numberLong": "69"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": ":checked",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "105cabccd21f71d9": {
            "code": ":checked",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Correct"
          },
          "15ae967d9528d531": {
            "code": "",
            "time": {
              "$numberLong": "103"
            },
            "correct": "Incorrect"
          },
          "15b78c7bb0b1289c": {
            "code": "",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "15ba94ae0f3567cc": {
            "code": ":checked",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": "",
            "time": {
              "$numberLong": "104"
            },
            "correct": "Incorrect"
          },
          "1a8787d5ac3c2faf": {
            "code": "",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "1b6fedf5a10e00b3": {
            "code": "~ checkbox",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "1d3a37f2f99c1d79": {
            "code": ":checked",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": ":checked",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "1dfdc28819143b61": {
            "code": ":checked",
            "time": {
              "$numberLong": "64"
            },
            "correct": "Correct"
          },
          "1e7b712f4c1a2174": {
            "code": ":checked",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": ":checked",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": "main:nth-child(3)",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "21c3a666ff63e628": {
            "code": ":checked",
            "time": {
              "$numberLong": "68"
            },
            "correct": "Correct"
          },
          "23a382d9c5934c7a": {
            "code": ":checked",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "2433fad4af9b8c91": {
            "code": "getAttrubute('checked');",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "25e3583c5051e437": {
            "code": ":checked",
            "time": {
              "$numberLong": "72"
            },
            "correct": "Correct"
          },
          "25eb9ebbb7f770c4": {
            "code": "*:checked",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "2689957139a0b7f3": {
            "code": "first-of-type(checkbox)",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Incorrect"
          },
          "2764eadce35f57da": {
            "code": "",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "280f2bf613bf2356": {
            "code": ":checked",
            "time": {
              "$numberLong": "111"
            },
            "correct": "Correct"
          },
          "2c25bb954402149d": {
            "code": "*",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "2ceb4a35b4cf3a82": {
            "code": ":checked",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "2d9ba0d32391edad": {
            "code": ":checked",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Correct"
          },
          "2e24514882f54cb5": {
            "code": "",
            "time": {
              "$numberLong": "113"
            },
            "correct": "Incorrect"
          },
          "2e2f307791d02365": {
            "code": ":checked",
            "time": {
              "$numberLong": "87"
            },
            "correct": "Correct"
          },
          "3028b167807cfbf4": {
            "code": ":checked",
            "time": {
              "$numberLong": "62"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": "*:checked",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "308b0b8c8ed4e4b2": {
            "code": ":checked",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": ":checked",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "327403c74f242fc4": {
            "code": "*:checked",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "337908399ff8968d": {
            "code": ":checked",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Correct"
          },
          "34d3ed1fe14ff7aa": {
            "code": "",
            "time": {
              "$numberLong": "133"
            },
            "correct": "Incorrect"
          },
          "36845437c429a4dc": {
            "code": "",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "3894d304c65d5923": {
            "code": "",
            "time": {
              "$numberLong": "113"
            },
            "correct": "Incorrect"
          },
          "38a04576b770c322": {
            "code": ":checked",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "39f73309c9835f82": {
            "code": ":checked",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "3ba45068e9680c30": {
            "code": "",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "3d0181f3e81ef243": {
            "code": "",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Incorrect"
          },
          "3d3363560523d9a8": {
            "code": ":checked",
            "time": {
              "$numberLong": "112"
            },
            "correct": "Correct"
          },
          "3d98fc87920f7e0c": {
            "code": ":checked",
            "time": {
              "$numberLong": "98"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": ":checked",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": "*.checked",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "3e559963b46090f4": {
            "code": ":checked",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Correct"
          },
          "3f8fa0047ef8f923": {
            "code": ":checked",
            "time": {
              "$numberLong": "52"
            },
            "correct": "Correct"
          },
          "41e6eb3636b0dea6": {
            "code": "*:checked",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": ":checked",
            "time": {
              "$numberLong": "31"
            },
            "correct": "Correct"
          },
          "45eb8ba11385b6f8": {
            "code": "checkbox:",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "47b0d3c480c0499f": {
            "code": "LOOOOL AZAZAZAZAZAZAZAZAZA",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "480ab1735929fbdf": {
            "code": ":checked",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "484d657a50c7d58b": {
            "code": "",
            "time": {
              "$numberLong": "131"
            },
            "correct": "Incorrect"
          },
          "497ce103c8ff6039": {
            "code": "*:first-child+",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "4b105e51e4c08180": {
            "code": "checked",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "4f118d5e0b612b81": {
            "code": "checked",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "50a53578f3677bb3": {
            "code": ":checked",
            "time": {
              "$numberLong": "99"
            },
            "correct": "Correct"
          },
          "515d626ac13d7d49": {
            "code": ":checked",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "52dc8df6d849d1e7": {
            "code": ":checked",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": ":checked ",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Correct"
          },
          "53ef06de121e27da": {
            "code": ":checked",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": "*:checked",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": ":checked",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "5501f3e4936798dc": {
            "code": ":checked",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "5770ae1f766e11be": {
            "code": "checkbox ",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "5bbed2dff9851a90": {
            "code": ":checked",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "5bc62ebbe1547412": {
            "code": ":checked",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "5c43f7ec7ed24f5c": {
            "code": ".checked",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "5ec5a92c865a392a": {
            "code": ":checked",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "",
            "time": {
              "$numberLong": "88"
            },
            "correct": "Incorrect"
          },
          "5f3daed844275059": {
            "code": "* ty",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "61028ee9d20fceb7": {
            "code": ".checkbox::first-child",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Incorrect"
          },
          "6284773c1c70faa0": {
            "code": ":checked",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "649f56b9ee432b59": {
            "code": "",
            "time": {
              "$numberLong": "117"
            },
            "correct": "Incorrect"
          },
          "65bac3ee110db920": {
            "code": ":checked ",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "671f84e88e48385e": {
            "code": ":checked ",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "68951f264bf7e0af": {
            "code": ":checked",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "69ef442e4c072287": {
            "code": "",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "6a022651b53ff8e4": {
            "code": ":checked",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "6aa28c09c1567f21": {
            "code": "type =[checkbox",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "6cfd71f6b043c8ae": {
            "code": ":checked",
            "time": {
              "$numberLong": "41"
            },
            "correct": "Correct"
          },
          "6e3bb276c237e728": {
            "code": ":checked",
            "time": {
              "$numberLong": "50"
            },
            "correct": "Correct"
          },
          "6e61365b7906364a": {
            "code": " :checked",
            "time": {
              "$numberLong": "61"
            },
            "correct": "Correct"
          },
          "749660598055b524": {
            "code": "эх",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "754a05bec8fc1059": {
            "code": "checkbox ",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "7b4401b3c14db5ae": {
            "code": ":checked",
            "time": {
              "$numberLong": "69"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": ":checked",
            "time": {
              "$numberLong": "57"
            },
            "correct": "Correct"
          },
          "7f8285ca08a7c23d": {
            "code": ":checked",
            "time": {
              "$numberLong": "86"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": ":checked ",
            "time": {
              "$numberLong": "47"
            },
            "correct": "Correct"
          },
          "81f3673d45dbbd11": {
            "code": ":checked ",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "8214a075dd4d2e2a": {
            "code": "checked ",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Incorrect"
          },
          "830cdf0b52f7e097": {
            "code": ":checked ",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "86b3ac39c3322df7": {
            "code": "",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "87a6eaef0181d2b0": {
            "code": "checked",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "8b110191c4ec82e6": {
            "code": "input:last-of-type(checkbox) ",
            "time": {
              "$numberLong": "79"
            },
            "correct": "Incorrect"
          },
          "8c1f7ac2879400f3": {
            "code": "",
            "time": {
              "$numberLong": "118"
            },
            "correct": "Incorrect"
          },
          "90e1114fbfc49b4c": {
            "code": "*:checked",
            "time": {
              "$numberLong": "109"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "911bca702e73f25e": {
            "code": ":checked",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "916088f8a25f68ab": {
            "code": "",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "9379cba22d7ac999": {
            "code": ":checked",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": ":checked",
            "time": {
              "$numberLong": "55"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": ":checked",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "9e6c2caff1d3b44e": {
            "code": "",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Incorrect"
          },
          "9ebd206bb5ff5c50": {
            "code": ":checked",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "9f2dfe266d0926fd": {
            "code": ".",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "a43e0947ef6a39e6": {
            "code": ":checked",
            "time": {
              "$numberLong": "55"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Incorrect"
          },
          "a9e4e4bf5bbd44e2": {
            "code": "*+inpit:nth(c",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "aa3387eff3195a54": {
            "code": "input : checked",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "adb27aa50f322c9a": {
            "code": ":checked ",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "af94e1b49f9fd125": {
            "code": "",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "b072bc5fe4196a18": {
            "code": "даа, делааа",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "b3e25403b5a88b4c": {
            "code": ":checked",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Correct"
          },
          "b4b9095a568f933b": {
            "code": "main\u003einput[checkbox]",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "b548101a3c7f3918": {
            "code": ".checkbox",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "b606ffc3e12081e8": {
            "code": ":checked",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": ":checked",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": "*:checked",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": ":checked",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "b84f6febc1eb8052": {
            "code": "*:checked",
            "time": {
              "$numberLong": "54"
            },
            "correct": "Correct"
          },
          "b8a7b1aafdd054f6": {
            "code": ":checked",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "b956b65fac918b0d": {
            "code": ":checked",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "bc007c7eb12b758f": {
            "code": ":checked",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": ":checked",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": ":checked",
            "time": {
              "$numberLong": "80"
            },
            "correct": "Correct"
          },
          "bd7703518ae1a7cc": {
            "code": "u",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "bde7ea1c0cae6b23": {
            "code": "input:checked",
            "time": {
              "$numberLong": "98"
            },
            "correct": "Incorrect"
          },
          "bdf748994d76821c": {
            "code": ":checked",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Correct"
          },
          "be36e54d93ecfde9": {
            "code": "",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "bfb56b4a3a4e3ae0": {
            "code": ":checked",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": "",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "c0709a23b54fbdaa": {
            "code": ":checked",
            "time": {
              "$numberLong": "31"
            },
            "correct": "Correct"
          },
          "c0ba15209a6160bd": {
            "code": "main:nth-child(3)",
            "time": {
              "$numberLong": "93"
            },
            "correct": "Incorrect"
          },
          "c1605be742d312f7": {
            "code": ".checkbox",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "c262edfa406f1703": {
            "code": "",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "c408a16d75df00b1": {
            "code": ":checked",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "c5252199216940cc": {
            "code": ":checked",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Correct"
          },
          "c66aede190d5feb5": {
            "code": ":checked",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "c6fe7dc836560d6c": {
            "code": "checkbox",
            "time": {
              "$numberLong": "103"
            },
            "correct": "Incorrect"
          },
          "c80f59106768f8fc": {
            "code": ":checked",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "c885a4c52d41db0a": {
            "code": "",
            "time": {
              "$numberLong": "100"
            },
            "correct": "Incorrect"
          },
          "c95f2638084b7864": {
            "code": "\u003cchec",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "cb3f71bd93fe9387": {
            "code": ":checked",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "cc334b6cceb2c0c7": {
            "code": "*:checked",
            "time": {
              "$numberLong": "108"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": "input[type=checkbox]:checked",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Incorrect"
          },
          "cd80f4cca6f54bbd": {
            "code": "[type=\"checkbox]:checked",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "d16390349858cc0c": {
            "code": ":checked",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Correct"
          },
          "d36c84d5b707caa5": {
            "code": "",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Incorrect"
          },
          "d37d52b418e0a03c": {
            "code": ":checked",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "d391e126a6560e50": {
            "code": "#checkbox",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "d478346a5082cb06": {
            "code": ":checked",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "d6a4e972f89f58c2": {
            "code": "#checkbox",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "d78da08ba35da4da": {
            "code": "in",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "d845ae29dc6912c0": {
            "code": ":checked",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "d914030007949409": {
            "code": ":checked ",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "d971459e842f8ac0": {
            "code": "",
            "time": {
              "$numberLong": "108"
            },
            "correct": "Incorrect"
          },
          "da737425476c1e9c": {
            "code": ":checked",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "e0dcdae0eefc008d": {
            "code": "юс:checked",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "e1515b0aaf35f202": {
            "code": ":checked",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Correct"
          },
          "e1c3bea6d9deb895": {
            "code": "input~number",
            "time": {
              "$numberLong": "133"
            },
            "correct": "Incorrect"
          },
          "e2118a33ce759dcf": {
            "code": "",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Incorrect"
          },
          "e35fd0231118b8d7": {
            "code": ":checked ",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Correct"
          },
          "e756fa9295ad1eed": {
            "code": ":checked",
            "time": {
              "$numberLong": "122"
            },
            "correct": "Correct"
          },
          "e7a0322647de571b": {
            "code": "*",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "e901657bdc9a5c8e": {
            "code": ":checked",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "ea423a7a257965d5": {
            "code": "*:checked",
            "time": {
              "$numberLong": "107"
            },
            "correct": "Correct"
          },
          "ea90a292408db4cd": {
            "code": ":checked",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": ":checked",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": ":checked",
            "time": {
              "$numberLong": "99"
            },
            "correct": "Correct"
          },
          "ec98d8bbf455e711": {
            "code": ":checked",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": ":checked",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": ":checked",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": "checkbox",
            "time": {
              "$numberLong": "117"
            },
            "correct": "Incorrect"
          },
          "f3d4f734582a568c": {
            "code": ":checked",
            "time": {
              "$numberLong": "26"
            },
            "correct": "Correct"
          },
          "f560fbf3a1ff7e95": {
            "code": "*:checked",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "f62cb888146a1b0b": {
            "code": "",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "f65b770c17c75f32": {
            "code": ":checked",
            "time": {
              "$numberLong": "102"
            },
            "correct": "Correct"
          },
          "f7287e04ee25af0e": {
            "code": ":checked",
            "time": {
              "$numberLong": "26"
            },
            "correct": "Correct"
          },
          "f8f1803efa21809f": {
            "code": ":checked",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": "",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "fac46268469de859": {
            "code": ":checked",
            "time": {
              "$numberLong": "41"
            },
            "correct": "Correct"
          },
          "fbdeb72cd7b8eac3": {
            "code": "checkbox",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "fd2e01c77a9563f3": {
            "code": ":checked",
            "time": {
              "$numberLong": "87"
            },
            "correct": "Correct"
          }
        }
      },
      {
        "puzzleIndex": {
          "$numberLong": "6"
        },
        "startTime": {
          "$date": "2018-05-14T18:01:53.503Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Correct"
          },
          "05cafc0b5c9ae78c": {
            "code": ":nth-child(2n-4)",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "0879d2a167cef132": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "08bc05c40aee0ef6": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "31"
            },
            "correct": "Correct"
          },
          "0af2c05d62662e75": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "0b51479a7fe6fc9d": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "69"
            },
            "correct": "Correct"
          },
          "0b914dc18e1050e4": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "99"
            },
            "correct": "Correct"
          },
          "0c265c8b844334a6": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "0d6d4955615a97f6": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "100"
            },
            "correct": "Correct"
          },
          "0e3b3572c97b9718": {
            "code": "ul :nth-child(2), ul :nth-child(4)",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "0e7fa1fc555463c5": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "131"
            },
            "correct": "Correct"
          },
          "0e8ceb668d96c395": {
            "code": "li:nth-child(-2n+4)",
            "time": {
              "$numberLong": "98"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "71"
            },
            "correct": "Correct"
          },
          "105cabccd21f71d9": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "15ae967d9528d531": {
            "code": "ul :nth-child(2), ul :nth-child(4)",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "15b78c7bb0b1289c": {
            "code": "ul :nth-child(2), ul :nth-child(4",
            "time": {
              "$numberLong": "94"
            },
            "correct": "Correct"
          },
          "15ba94ae0f3567cc": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "50"
            },
            "correct": "Correct"
          },
          "1a8787d5ac3c2faf": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": "li:nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Correct"
          },
          "1d3a37f2f99c1d79": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "70"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "1dfdc28819143b61": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "1e7b712f4c1a2174": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "61"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": ":nth-child(2), :nth-child(4",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": "ul:nth-child(2), ul:nth-child(4)  ",
            "time": {
              "$numberLong": "112"
            },
            "correct": "Incorrect"
          },
          "21c3a666ff63e628": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "23a382d9c5934c7a": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "2433fad4af9b8c91": {
            "code": "li:nth-child(2n+2) lt:n",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "25e3583c5051e437": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "71"
            },
            "correct": "Correct"
          },
          "25eb9ebbb7f770c4": {
            "code": "ul li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "2689957139a0b7f3": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "2764eadce35f57da": {
            "code": "ul:nth-child(2n)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "280f2bf613bf2356": {
            "code": "ul li:nth-child(2), ul li:nth-child(4)",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "2c25bb954402149d": {
            "code": "li:nth-",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "2ceb4a35b4cf3a82": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "2d9ba0d32391edad": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "2e24514882f54cb5": {
            "code": "",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Incorrect"
          },
          "2e2f307791d02365": {
            "code": "ul\u003e:nth-child(2n)",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "3028b167807cfbf4": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "84"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "308b0b8c8ed4e4b2": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": "ul\u003eli:nth-child(2),ul\u003eli:nth-child(4)",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": "li:nth-child(2n)",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Incorrect"
          },
          "327403c74f242fc4": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "337908399ff8968d": {
            "code": "ul li:nth-child(2), ul li:nth-child(4)",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "34d3ed1fe14ff7aa": {
            "code": "li:nth-child(2) , li:nth-child(4)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Correct"
          },
          "36845437c429a4dc": {
            "code": "ul :nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "123"
            },
            "correct": "Correct"
          },
          "3894d304c65d5923": {
            "code": "ul li:nth-child(2), ul li:nth-child(4)",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "38a04576b770c322": {
            "code": "ul:last-nth-child(2 ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "39f73309c9835f82": {
            "code": "ul :nth-child(2), ul :nth-child(4)",
            "time": {
              "$numberLong": "103"
            },
            "correct": "Correct"
          },
          "3ba45068e9680c30": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "3d3363560523d9a8": {
            "code": "li:nth-child(n2, n4)",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "3d98fc87920f7e0c": {
            "code": ":nth-child(2), :nth-child(4",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": "li:nth-child(2n)",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "3e3e38b35680eeb3": {
            "code": "ul\u003eli:nth-child(2n) ",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "3e559963b46090f4": {
            "code": "",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Incorrect"
          },
          "3f8fa0047ef8f923": {
            "code": "li:nth-child(2), li:nth-child(4) ",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "41e6eb3636b0dea6": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": ":nth-last-child(2n-7)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "45eb8ba11385b6f8": {
            "code": "li:nth-child(2n )  ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "47b0d3c480c0499f": {
            "code": "ul li:nth-child(2), ul:nth-child(4)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "480ab1735929fbdf": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "484d657a50c7d58b": {
            "code": "ul:nth-child(3n) li",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "497ce103c8ff6039": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "91"
            },
            "correct": "Correct"
          },
          "4b105e51e4c08180": {
            "code": "li:nth-child(2n+4)",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "4f118d5e0b612b81": {
            "code": "li:nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "93"
            },
            "correct": "Correct"
          },
          "50a53578f3677bb3": {
            "code": "ul li:nth-child(6n-2), ul li:nth-child(6n-3)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "515d626ac13d7d49": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "52dc8df6d849d1e7": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": ":nth-child(2n+2)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "53ef06de121e27da": {
            "code": "li:nth-child(7n+2), li:nth-child(7n+4)",
            "time": {
              "$numberLong": "95"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": "ul li:nth-last-child(2n+5)",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": ":nth-child(2) , :nth-child(4)",
            "time": {
              "$numberLong": "107"
            },
            "correct": "Correct"
          },
          "5501f3e4936798dc": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "5770ae1f766e11be": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "5bbed2dff9851a90": {
            "code": "li:nth-child(2n-6)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "5bc62ebbe1547412": {
            "code": "li:nth-child(-n+4)",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Incorrect"
          },
          "5c43f7ec7ed24f5c": {
            "code": "li:nth-child(2), li:nth-child(4) ",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Correct"
          },
          "5ec5a92c865a392a": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "52"
            },
            "correct": "Correct"
          },
          "5f3daed844275059": {
            "code": "",
            "time": {
              "$numberLong": "127"
            },
            "correct": "Incorrect"
          },
          "61028ee9d20fceb7": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "80"
            },
            "correct": "Correct"
          },
          "6284773c1c70faa0": {
            "code": ":nth-child(2n)",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "649f56b9ee432b59": {
            "code": "ul li:nth-child(2), ul li:nth-child(4)",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "65bac3ee110db920": {
            "code": "ul\u003eli:nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "671f84e88e48385e": {
            "code": ":nth-child(2n+ ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "68951f264bf7e0af": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "69ef442e4c072287": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "6a022651b53ff8e4": {
            "code": "li:nth-child(2n )",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Incorrect"
          },
          "6aa28c09c1567f21": {
            "code": "li:nth-last-child(2n+5)",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Correct"
          },
          "6cfd71f6b043c8ae": {
            "code": ":nth-child(2n)",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "6e3bb276c237e728": {
            "code": "ul li + li, ul:nth-child(7)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "6e61365b7906364a": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "749660598055b524": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "86"
            },
            "correct": "Correct"
          },
          "754a05bec8fc1059": {
            "code": "ul :nth-child(2)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "7b4401b3c14db5ae": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "ul li:nth-child(2),ul li:nth-child(4)",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "7f279e34bfbd28d8": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "7f8285ca08a7c23d": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "ul li:nth-child(2), ul li:nth-child(4) ",
            "time": {
              "$numberLong": "83"
            },
            "correct": "Correct"
          },
          "81f3673d45dbbd11": {
            "code": "ul li:nth-child(2),ul :nth-child(4)",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "8214a075dd4d2e2a": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "830cdf0b52f7e097": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "86b3ac39c3322df7": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "87a6eaef0181d2b0": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "8b110191c4ec82e6": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "112"
            },
            "correct": "Correct"
          },
          "8b4acd6ccf915b89": {
            "code": "li:nth-of-type(2), li:nth-of-type(4",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "8c1f7ac2879400f3": {
            "code": "li:nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "76"
            },
            "correct": "Correct"
          },
          "90e1114fbfc49b4c": {
            "code": "ul li:nth-of-type(2), ul li:nth-of-type(4)",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": ":nth-child(2n+2)",
            "time": {
              "$numberLong": "122"
            },
            "correct": "Incorrect"
          },
          "911bca702e73f25e": {
            "code": "ul :nth-child(2), ul li:nth-child(4) ",
            "time": {
              "$numberLong": "79"
            },
            "correct": "Correct"
          },
          "916088f8a25f68ab": {
            "code": "li:nth-child(2n+2) ",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "9379cba22d7ac999": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": ":nth-child(2),:nth-child(4",
            "time": {
              "$numberLong": "107"
            },
            "correct": "Correct"
          },
          "9e6c2caff1d3b44e": {
            "code": ":nth-child(2), :nth-child(4",
            "time": {
              "$numberLong": "113"
            },
            "correct": "Correct"
          },
          "9ebd206bb5ff5c50": {
            "code": "li:nth-child(2(n)",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "9f2dfe266d0926fd": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": "ul li:nth-child(2), ul li:nth-child(4)",
            "time": {
              "$numberLong": "63"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "a9e4e4bf5bbd44e2": {
            "code": "li:nth-child(2),li:nth-child(4",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "aa3387eff3195a54": {
            "code": "li :nth-child(2, 4)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "adb27aa50f322c9a": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "102"
            },
            "correct": "Correct"
          },
          "af94e1b49f9fd125": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "b072bc5fe4196a18": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "b3e25403b5a88b4c": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "b4b9095a568f933b": {
            "code": "li:nth-of-type(2), li:nth-of-type(4)",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": "ul :nth-child(2),ul :nth-child(4)",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "b606ffc3e12081e8": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": "",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "b6a56483a4bfda2e": {
            "code": "ul li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "b84f6febc1eb8052": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "b8a7b1aafdd054f6": {
            "code": "div :nth-of-type(2), div :nth-of-type(4)",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Correct"
          },
          "b956b65fac918b0d": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "bc007c7eb12b758f": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": "li:nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": "ul li:nth-child(2), ul :nth-child(4)",
            "time": {
              "$numberLong": "63"
            },
            "correct": "Correct"
          },
          "bd7703518ae1a7cc": {
            "code": "ul\u003eli:nth-child(2),ul\u003eli:nth-child(4)",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "bde7ea1c0cae6b23": {
            "code": "li:nth-child(2n)",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Incorrect"
          },
          "bdf748994d76821c": {
            "code": "u",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "be36e54d93ecfde9": {
            "code": "li:nth-last-child(5), li:nth-last-child(7)",
            "time": {
              "$numberLong": "89"
            },
            "correct": "Correct"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "ul li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": "li:nth-child(2),li:nth-child(4) ",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Correct"
          },
          "c0709a23b54fbdaa": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "71"
            },
            "correct": "Correct"
          },
          "c0ba15209a6160bd": {
            "code": "ul li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Correct"
          },
          "c1605be742d312f7": {
            "code": ":nth-child(2),:nth-child(4)",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Correct"
          },
          "c262edfa406f1703": {
            "code": "li:nth-child(2), li:nth-child(4",
            "time": {
              "$numberLong": "88"
            },
            "correct": "Correct"
          },
          "c408a16d75df00b1": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Correct"
          },
          "c5252199216940cc": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "117"
            },
            "correct": "Correct"
          },
          "c66aede190d5feb5": {
            "code": "li::after li",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Incorrect"
          },
          "c80f59106768f8fc": {
            "code": ":nth-child(-2n+4)",
            "time": {
              "$numberLong": "70"
            },
            "correct": "Correct"
          },
          "c885a4c52d41db0a": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "47"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": "ul :nth-child(2n+",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "cb3f71bd93fe9387": {
            "code": "li:nth-child(5n+4), li:nth-child(5n+6)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "cc334b6cceb2c0c7": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "120"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": "ul :nth-child(2),ul :nth-child(4)",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "cd80f4cca6f54bbd": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "d16390349858cc0c": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "62"
            },
            "correct": "Correct"
          },
          "d36c84d5b707caa5": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "d37d52b418e0a03c": {
            "code": "li:nth-last-child(2n+5)",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Correct"
          },
          "d391e126a6560e50": {
            "code": "li",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Incorrect"
          },
          "d478346a5082cb06": {
            "code": "ul :nth-child(2), ul :nth-child(4)",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "d6a4e972f89f58c2": {
            "code": ":nth-child(2n)",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "d78da08ba35da4da": {
            "code": "ul  li+li+li+li",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "d845ae29dc6912c0": {
            "code": "li:nth-of-type(2), li:nth-of-type(4)",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "d914030007949409": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "d971459e842f8ac0": {
            "code": "li:nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Correct"
          },
          "da737425476c1e9c": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "e0dcdae0eefc008d": {
            "code": "ul :nth-child(2), ul :nth-child(4)",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "e1515b0aaf35f202": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "e1c3bea6d9deb895": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Correct"
          },
          "e2118a33ce759dcf": {
            "code": "ul li::nth-of-type(2n+2),",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "e35fd0231118b8d7": {
            "code": "li:nth-child(2n+2)",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Incorrect"
          },
          "e756fa9295ad1eed": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "117"
            },
            "correct": "Correct"
          },
          "e7a0322647de571b": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "e901657bdc9a5c8e": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "119"
            },
            "correct": "Correct"
          },
          "ea423a7a257965d5": {
            "code": "li:nth-child(2n), li:next-child(4)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "ea90a292408db4cd": {
            "code": "li:nth-child(2)",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "eb370cad0cdbdbbc": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "35"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": "ul \u003e li:nth-child(2),ul \u003e li:nth-child(4)",
            "time": {
              "$numberLong": "95"
            },
            "correct": "Correct"
          },
          "ec98d8bbf455e711": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "47"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": ":nth-child(2), :nth-child(4",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Correct"
          },
          "f3d4f734582a568c": {
            "code": "",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "f560fbf3a1ff7e95": {
            "code": ":nth-of-type(2),:nth-of-type(4)",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "f62cb888146a1b0b": {
            "code": "",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Incorrect"
          },
          "f65b770c17c75f32": {
            "code": "li:nth-of-type(2),li:nth-of-type(4)",
            "time": {
              "$numberLong": "98"
            },
            "correct": "Correct"
          },
          "f7287e04ee25af0e": {
            "code": "ul li:nth-child(2), ul li:nth-child(4",
            "time": {
              "$numberLong": "82"
            },
            "correct": "Correct"
          },
          "f8f1803efa21809f": {
            "code": ":nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": "",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "fac46268469de859": {
            "code": "li:nth-child(2),li:nth-child(4)",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "fbdeb72cd7b8eac3": {
            "code": "li:nth-child(2), :nth-child(4)",
            "time": {
              "$numberLong": "91"
            },
            "correct": "Correct"
          },
          "fd2e01c77a9563f3": {
            "code": "li:nth-child(2), li:nth-child(4)",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          }
        }
      },
      {
        "puzzleIndex": {
          "$numberLong": "7"
        },
        "startTime": {
          "$date": "2018-05-14T18:05:44.728Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": ":nth-child(n+2)",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": "#second-son ",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Incorrect"
          },
          "05cafc0b5c9ae78c": {
            "code": "",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Incorrect"
          },
          "0879d2a167cef132": {
            "code": "div:nth-(not):nt",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "08bc05c40aee0ef6": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "0af2c05d62662e75": {
            "code": "div \u003e *.firstborn",
            "time": {
              "$numberLong": "118"
            },
            "correct": "Incorrect"
          },
          "0b51479a7fe6fc9d": {
            "code": "*:not(",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "0b914dc18e1050e4": {
            "code": "*:not(:first-child) ",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "0c265c8b844334a6": {
            "code": ".firstborn \u003e *",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "0d6d4955615a97f6": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "0e3b3572c97b9718": {
            "code": "div *[cl]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "0e7fa1fc555463c5": {
            "code": "div:not:first-child",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "0e8ceb668d96c395": {
            "code": "div ~*:not(.firstborn)",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "62"
            },
            "correct": "Correct"
          },
          "105cabccd21f71d9": {
            "code": ":not(:first)",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "15ae967d9528d531": {
            "code": "div \u003e div.firstborn~ *",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "15b78c7bb0b1289c": {
            "code": "*:not(first-child)",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "15ba94ae0f3567cc": {
            "code": "div~:not(.firstborn)",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": "div \u003e div ~ *",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "1a8787d5ac3c2faf": {
            "code": "div\u003ediv ~ *",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "89"
            },
            "correct": "Correct"
          },
          "1d3a37f2f99c1d79": {
            "code": "div\u003e* :not(:first-child)",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": "div \u003e * div +",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "1dfdc28819143b61": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "1e7b712f4c1a2174": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": " *:not(.firstborn)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "21c3a666ff63e628": {
            "code": " div *:not(:nth-child(1)",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Correct"
          },
          "23a382d9c5934c7a": {
            "code": "div * :not(.firstborn)",
            "time": {
              "$numberLong": "108"
            },
            "correct": "Correct"
          },
          "2433fad4af9b8c91": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Correct"
          },
          "25e3583c5051e437": {
            "code": ":not(.firstborn)",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Incorrect"
          },
          "25eb9ebbb7f770c4": {
            "code": "#",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "2689957139a0b7f3": {
            "code": "div: not first-child",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "2764eadce35f57da": {
            "code": " ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "280f2bf613bf2356": {
            "code": "div *:not(:nth-child(1))",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "2c25bb954402149d": {
            "code": "zhest!",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "2ceb4a35b4cf3a82": {
            "code": "div \u003e div ~ *",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "2d9ba0d32391edad": {
            "code": "*",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "2e24514882f54cb5": {
            "code": "",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "2e2f307791d02365": {
            "code": "div\u003e:not(:first-child)",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Correct"
          },
          "3028b167807cfbf4": {
            "code": ":not(:nth-child(1))",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "308b0b8c8ed4e4b2": {
            "code": ":not(:first-)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "30aded38fc2a4e31": {
            "code": "div~*",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": ":not(:first-child",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Correct"
          },
          "327403c74f242fc4": {
            "code": "жбээээээээ",
            "time": {
              "$numberLong": "122"
            },
            "correct": "Incorrect"
          },
          "337908399ff8968d": {
            "code": "div ~*:not(.firstborn)",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Correct"
          },
          "34d3ed1fe14ff7aa": {
            "code": "div\u003e*:not(.firstborn)",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "36845437c429a4dc": {
            "code": "div * :not(.firstborn)",
            "time": {
              "$numberLong": "91"
            },
            "correct": "Correct"
          },
          "3894d304c65d5923": {
            "code": "",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "38a04576b770c322": {
            "code": ":not(:first-ch)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "39e6bb0cad07022e": {
            "code": "span",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "39f73309c9835f82": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "3ba45068e9680c30": {
            "code": "div :not(:first-child)",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": "not(div:first-child)",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "3d3363560523d9a8": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "3d98fc87920f7e0c": {
            "code": "div * + *",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": "div\u003e:nth-child(n+2)",
            "time": {
              "$numberLong": "47"
            },
            "correct": "Correct"
          },
          "3e559963b46090f4": {
            "code": "div \u003e :not(:first-child)",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Correct"
          },
          "3f8fa0047ef8f923": {
            "code": "div \u003e *:not(:first-child)",
            "time": {
              "$numberLong": "90"
            },
            "correct": "Correct"
          },
          "41e6eb3636b0dea6": {
            "code": "div :nth-child(n+2)",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": ":nth-child(n+2)",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "45eb8ba11385b6f8": {
            "code": "div:nth-child(n+1)",
            "time": {
              "$numberLong": "123"
            },
            "correct": "Incorrect"
          },
          "47b0d3c480c0499f": {
            "code": "div \u003e * + *",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "480ab1735929fbdf": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Correct"
          },
          "484d657a50c7d58b": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "497ce103c8ff6039": {
            "code": "~:nth-child(1)",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "4b105e51e4c08180": {
            "code": "div.firstborn~*",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "4f118d5e0b612b81": {
            "code": "div :nth-child(2n)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "50a53578f3677bb3": {
            "code": ":not(:nth-child(1))",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "515d626ac13d7d49": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Correct"
          },
          "52dc8df6d849d1e7": {
            "code": ":not(div+div):n",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "532967272335f916": {
            "code": ":nth-child(-3n+7)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "53ef06de121e27da": {
            "code": ":not(:nth-child(1",
            "time": {
              "$numberLong": "67"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "5501f3e4936798dc": {
            "code": "div\u003e:not(firstborn)+*",
            "time": {
              "$numberLong": "91"
            },
            "correct": "Correct"
          },
          "5770ae1f766e11be": {
            "code": "div \u003e :not(#second-son):not(.firstborn)",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "583f70e6235a536f": {
            "code": "",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "5bbed2dff9851a90": {
            "code": "div \u003e div.firstborn",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "5bc62ebbe1547412": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "5c43f7ec7ed24f5c": {
            "code": "",
            "time": {
              "$numberLong": "120"
            },
            "correct": "Incorrect"
          },
          "5ec5a92c865a392a": {
            "code": "div *:not(:first-child",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "5f3daed844275059": {
            "code": "div:not ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "61028ee9d20fceb7": {
            "code": "div:not(:first-child) + span",
            "time": {
              "$numberLong": "119"
            },
            "correct": "Incorrect"
          },
          "6284773c1c70faa0": {
            "code": ":not(.firstborn)",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Incorrect"
          },
          "649f56b9ee432b59": {
            "code": "div div+div",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "65bac3ee110db920": {
            "code": "div\u003e:not(:nth-child(1))",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "671f84e88e48385e": {
            "code": "div~*",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Correct"
          },
          "68951f264bf7e0af": {
            "code": "div:first-child ~*",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Correct"
          },
          "69ef442e4c072287": {
            "code": ":not(:nth-child(1))",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Correct"
          },
          "6a022651b53ff8e4": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "6aa28c09c1567f21": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "35"
            },
            "correct": "Correct"
          },
          "6cfd71f6b043c8ae": {
            "code": ":not:first-chil(.firstborn)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "6e3bb276c237e728": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "31"
            },
            "correct": "Correct"
          },
          "6e61365b7906364a": {
            "code": "div:not(div\u003enth-child)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "749660598055b524": {
            "code": ":nth-child(n+2)",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Correct"
          },
          "754a05bec8fc1059": {
            "code": "",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Incorrect"
          },
          "7b4401b3c14db5ae": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "div\u003e* not (:first-child)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "7f279e34bfbd28d8": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "113"
            },
            "correct": "Correct"
          },
          "7f8285ca08a7c23d": {
            "code": "div\u003e*:not(:first-child)",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "*:not(1), ",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "81f3673d45dbbd11": {
            "code": "div:not[div:first-child]",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "8214a075dd4d2e2a": {
            "code": "div \u003e   ",
            "time": {
              "$numberLong": "119"
            },
            "correct": "Incorrect"
          },
          "830cdf0b52f7e097": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "86b3ac39c3322df7": {
            "code": ":not(firstborn)",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "87a6eaef0181d2b0": {
            "code": "div:",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "8b110191c4ec82e6": {
            "code": "div:not(.first-child)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "8b4acd6ccf915b89": {
            "code": "#second-son ~ span",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "8c1f7ac2879400f3": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "90e1114fbfc49b4c": {
            "code": "div :nth-child(n+2)",
            "time": {
              "$numberLong": "111"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": ":nth-child(n+2)",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Correct"
          },
          "911bca702e73f25e": {
            "code": "div:not(div:nth-child(1))",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "916088f8a25f68ab": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Correct"
          },
          "9379cba22d7ac999": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "86"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": ":nth-child(n+2)",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": ":not(:nth-child(1))",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "9e6c2caff1d3b44e": {
            "code": ":nth-child",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "9ebd206bb5ff5c50": {
            "code": "div :nth-child(n) :not(1)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "9f2dfe266d0926fd": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "div:nth-child(2n +1",
            "time": {
              "$numberLong": "90"
            },
            "correct": "Incorrect"
          },
          "a9e4e4bf5bbd44e2": {
            "code": "div:not(1)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "aa3387eff3195a54": {
            "code": "div \u003e !nth:child(1)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "adb27aa50f322c9a": {
            "code": "div:nth-child()",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "af94e1b49f9fd125": {
            "code": "div \u003e :not(:first-child)",
            "time": {
              "$numberLong": "118"
            },
            "correct": "Correct"
          },
          "b072bc5fe4196a18": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "70"
            },
            "correct": "Correct"
          },
          "b3e25403b5a88b4c": {
            "code": "div:nth-cli",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "b4b9095a568f933b": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": "div \u003e *:not(.firstborn)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "b606ffc3e12081e8": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": ":nth-child(n+2)",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "82"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "b84f6febc1eb8052": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "b8a7b1aafdd054f6": {
            "code": "not:( div:nth-child(1))",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "b956b65fac918b0d": {
            "code": ".firstborn \u003e *",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "bc007c7eb12b758f": {
            "code": "div~:not(.firstborn)",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": "div ~ *:not(.firstborn)",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": " :not(:nth-child(1))",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "bd7703518ae1a7cc": {
            "code": "div\u003enth-child(1):not",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "bde7ea1c0cae6b23": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "63"
            },
            "correct": "Correct"
          },
          "bdf748994d76821c": {
            "code": "div:(:nth-child(1))",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "be36e54d93ecfde9": {
            "code": "*:nth-child(2n)",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Incorrect"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "div * + *",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": "div div ~ *",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "c0709a23b54fbdaa": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "c0ba15209a6160bd": {
            "code": "div \u003e * :not(.firstborn) ",
            "time": {
              "$numberLong": "126"
            },
            "correct": "Correct"
          },
          "c1605be742d312f7": {
            "code": ":not(:nth-child(1))",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "c262edfa406f1703": {
            "code": ":nth-child(n+2",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Correct"
          },
          "c408a16d75df00b1": {
            "code": "div \u003e* :not(.firstborn)",
            "time": {
              "$numberLong": "107"
            },
            "correct": "Correct"
          },
          "c5252199216940cc": {
            "code": "div \u003e*",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "c66aede190d5feb5": {
            "code": "div ~)",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "c6fe7dc836560d6c": {
            "code": ":not(firstborn)",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "c80f59106768f8fc": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Correct"
          },
          "c885a4c52d41db0a": {
            "code": ":not(:first-child",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": "div :nth ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "cb3f71bd93fe9387": {
            "code": "div ~ *",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "cc334b6cceb2c0c7": {
            "code": "div :nth-child(n+2)",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": "div :nth-child(n+2)",
            "time": {
              "$numberLong": "96"
            },
            "correct": "Correct"
          },
          "cd80f4cca6f54bbd": {
            "code": ":nth-child(n+2)",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Correct"
          },
          "d16390349858cc0c": {
            "code": ":not(:nth-child(1",
            "time": {
              "$numberLong": "20"
            },
            "correct": "Correct"
          },
          "d36c84d5b707caa5": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "d37d52b418e0a03c": {
            "code": ".firstborn ~*",
            "time": {
              "$numberLong": "126"
            },
            "correct": "Correct"
          },
          "d391e126a6560e50": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "d478346a5082cb06": {
            "code": ":not(:nth-child(1))",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "d6a4e972f89f58c2": {
            "code": "div\u003e:nth-child(-n+5)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "d78da08ba35da4da": {
            "code": "div not \"firstborn\"",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "d845ae29dc6912c0": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "52"
            },
            "correct": "Correct"
          },
          "d914030007949409": {
            "code": "*:not(:first-child)",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Correct"
          },
          "d971459e842f8ac0": {
            "code": "*:not(.firstborn)",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Incorrect"
          },
          "da737425476c1e9c": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Correct"
          },
          "e0dcdae0eefc008d": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "87"
            },
            "correct": "Correct"
          },
          "e1515b0aaf35f202": {
            "code": ":not(:fir)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "e1c3bea6d9deb895": {
            "code": "div\u003e*",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "e2118a33ce759dcf": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Correct"
          },
          "e35fd0231118b8d7": {
            "code": "div:nth-child(even)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "e756fa9295ad1eed": {
            "code": ".firstborn ~ *:not(.firstborn)",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Correct"
          },
          "e7a0322647de571b": {
            "code": ":nth-child(2) :nth-child(2) ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "e901657bdc9a5c8e": {
            "code": ":not(:first-child)",
            "time": {
              "$numberLong": "120"
            },
            "correct": "Correct"
          },
          "ea423a7a257965d5": {
            "code": "div :nth-child(n+2)",
            "time": {
              "$numberLong": "70"
            },
            "correct": "Correct"
          },
          "ea90a292408db4cd": {
            "code": ".firstborn~*",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": "div:not()",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "ec8c03effc5b296e": {
            "code": "div ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "ec98d8bbf455e711": {
            "code": "div~:not(first-child)",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": "div \u003e :not(:first-child",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": ":not(.firstborn,)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "f3d4f734582a568c": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "f560fbf3a1ff7e95": {
            "code": " div:not(",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "f65b770c17c75f32": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "93"
            },
            "correct": "Correct"
          },
          "f7287e04ee25af0e": {
            "code": "div:not(div:nth-child(1))",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "f8f1803efa21809f": {
            "code": ".firstborn ~ *",
            "time": {
              "$numberLong": "120"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": ":not",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "fac46268469de859": {
            "code": ".firstborn+*",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "fbdeb72cd7b8eac3": {
            "code": "div~:not(.firstborn)",
            "time": {
              "$numberLong": "107"
            },
            "correct": "Correct"
          },
          "fd2e01c77a9563f3": {
            "code": "div~:not(.firstborn)",
            "time": {
              "$numberLong": "47"
            },
            "correct": "Correct"
          }
        }
      },
      {
        "puzzleIndex": {
          "$numberLong": "8"
        },
        "startTime": {
          "$date": "2018-05-14T18:10:38.662Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": "div\u003e div \u003ediv\u003e div \u003ediv\u003e div \u003ediv\u003e div \u003ediv\u003e div ",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Correct"
          },
          "05cafc0b5c9ae78c": {
            "code": "div div ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "0879d2a167cef132": {
            "code": "div:not(first-child)",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "08bc05c40aee0ef6": {
            "code": "div:empty",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "0af2c05d62662e75": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "90"
            },
            "correct": "Correct"
          },
          "0b51479a7fe6fc9d": {
            "code": "div:empty",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Correct"
          },
          "0b914dc18e1050e4": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "0c265c8b844334a6": {
            "code": ":empty",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "0d6d4955615a97f6": {
            "code": "*:nth-child(8)",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "0e3b3572c97b9718": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Correct"
          },
          "0e7fa1fc555463c5": {
            "code": "div:empty",
            "time": {
              "$numberLong": "79"
            },
            "correct": "Correct"
          },
          "0e8ceb668d96c395": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": ":empty",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "105cabccd21f71d9": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "15ae967d9528d531": {
            "code": "div \u003e div \u003e div \u003e div \u003e div\u003e div \u003e div \u003e div \u003ediv\u003e div",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "15b78c7bb0b1289c": {
            "code": ":empty",
            "time": {
              "$numberLong": "80"
            },
            "correct": "Correct"
          },
          "15ba94ae0f3567cc": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": "div \u003e div \u003e div \u003e div \u003e div div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Correct"
          },
          "1a8787d5ac3c2faf": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "82"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "72"
            },
            "correct": "Correct"
          },
          "1d3a37f2f99c1d79": {
            "code": "",
            "time": {
              "$numberLong": "84"
            },
            "correct": "Incorrect"
          },
          "1dc1b34c3693ea0a": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "1dfdc28819143b61": {
            "code": "div:last-child:ndiv",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "1e7b712f4c1a2174": {
            "code": "div:empty",
            "time": {
              "$numberLong": "2"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": "div:empty",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": "",
            "time": {
              "$numberLong": "95"
            },
            "correct": "Incorrect"
          },
          "21c3a666ff63e628": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "52"
            },
            "correct": "Correct"
          },
          "23a382d9c5934c7a": {
            "code": "div:last-child",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "2433fad4af9b8c91": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "25e3583c5051e437": {
            "code": "div div div div div div div div di",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "25eb9ebbb7f770c4": {
            "code": "div * dif",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "2689957139a0b7f3": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "2764eadce35f57da": {
            "code": "div:nth-ch",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "280f2bf613bf2356": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "2c25bb954402149d": {
            "code": "div * * * * * * * * *",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Correct"
          },
          "2ceb4a35b4cf3a82": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "2d9ba0d32391edad": {
            "code": "div \u003e div \u003e div \u003ediv \u003ediv \u003ediv \u003ediv \u003ediv \u003e div \u003ediv",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "2e2f307791d02365": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Correct"
          },
          "3028b167807cfbf4": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": ":empty",
            "time": {
              "$numberLong": "13"
            },
            "correct": "Correct"
          },
          "308b0b8c8ed4e4b2": {
            "code": "div:empty",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": "div:empty",
            "time": {
              "$numberLong": "100"
            },
            "correct": "Correct"
          },
          "327403c74f242fc4": {
            "code": "div:empty",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "337908399ff8968d": {
            "code": "div:last-of-type",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "34d3ed1fe14ff7aa": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003e",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "36845437c429a4dc": {
            "code": "",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Incorrect"
          },
          "3894d304c65d5923": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv ",
            "time": {
              "$numberLong": "72"
            },
            "correct": "Correct"
          },
          "38a04576b770c322": {
            "code": ":empty",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "39f73309c9835f82": {
            "code": ":first-child",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "3ba45068e9680c30": {
            "code": "div * * * * * * * * *",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "3d3363560523d9a8": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "3d98fc87920f7e0c": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "56"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "3e559963b46090f4": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "3f8fa0047ef8f923": {
            "code": ":empty",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "41e6eb3636b0dea6": {
            "code": "div div div div div div div div div div ",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": "",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "45eb8ba11385b6f8": {
            "code": "div:last-child",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "47b0d3c480c0499f": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "480ab1735929fbdf": {
            "code": "div\u003e:last-child",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "484d657a50c7d58b": {
            "code": "div:nth-child(8) div",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "497ce103c8ff6039": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "4b105e51e4c08180": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "4f118d5e0b612b81": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "62"
            },
            "correct": "Correct"
          },
          "50a53578f3677bb3": {
            "code": ":nth-child(9)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "515d626ac13d7d49": {
            "code": ":nth-last-child(1)",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "52dc8df6d849d1e7": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": ")",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "53ef06de121e27da": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": ":empty",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": ":",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "5501f3e4936798dc": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "62"
            },
            "correct": "Correct"
          },
          "5770ae1f766e11be": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Correct"
          },
          "583f70e6235a536f": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "5bbed2dff9851a90": {
            "code": "div:empty",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "5bc62ebbe1547412": {
            "code": "div \u003e ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "5c43f7ec7ed24f5c": {
            "code": "div\u003e",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Incorrect"
          },
          "5ec5a92c865a392a": {
            "code": ":empty",
            "time": {
              "$numberLong": "11"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "70"
            },
            "correct": "Correct"
          },
          "5f3daed844275059": {
            "code": "div\u003elast-child",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "61028ee9d20fceb7": {
            "code": "div:empty",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Correct"
          },
          "6284773c1c70faa0": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "649f56b9ee432b59": {
            "code": "",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "65bac3ee110db920": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "671f84e88e48385e": {
            "code": ":empty",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Correct"
          },
          "68951f264bf7e0af": {
            "code": "*div",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "69ef442e4c072287": {
            "code": "",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Incorrect"
          },
          "6a022651b53ff8e4": {
            "code": ":empty",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "6aa28c09c1567f21": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "6cfd71f6b043c8ae": {
            "code": ":nth-last-child(n)",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "6e3bb276c237e728": {
            "code": ":empty",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Correct"
          },
          "6e61365b7906364a": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "749660598055b524": {
            "code": "",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "754a05bec8fc1059": {
            "code": ":last-child",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "7b4401b3c14db5ae": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "div:only-child",
            "time": {
              "$numberLong": "122"
            },
            "correct": "Incorrect"
          },
          "7f279e34bfbd28d8": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "7f8285ca08a7c23d": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "div::nth-last-child()",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "81f3673d45dbbd11": {
            "code": "div:empty",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "8214a075dd4d2e2a": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div ",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "830cdf0b52f7e097": {
            "code": ":last",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "86b3ac39c3322df7": {
            "code": ":not(div \u003e div)",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "87a6eaef0181d2b0": {
            "code": "div:empty",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Correct"
          },
          "8b4acd6ccf915b89": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "8c1f7ac2879400f3": {
            "code": "",
            "time": {
              "$numberLong": "120"
            },
            "correct": "Incorrect"
          },
          "90e1114fbfc49b4c": {
            "code": "div:empty",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": "",
            "time": {
              "$numberLong": "69"
            },
            "correct": "Incorrect"
          },
          "911bca702e73f25e": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "916088f8a25f68ab": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "9379cba22d7ac999": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div ",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "9e6c2caff1d3b44e": {
            "code": "",
            "time": {
              "$numberLong": "114"
            },
            "correct": "Incorrect"
          },
          "9ebd206bb5ff5c50": {
            "code": ":empty",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Correct"
          },
          "9f2dfe266d0926fd": {
            "code": ":nth-child(1) \u003e :nth-child(1)",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "a1279219bd977f74": {
            "code": ":empty",
            "time": {
              "$numberLong": "22"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "18"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "kk",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "a9e4e4bf5bbd44e2": {
            "code": "div:nth-child(2n+1)",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "aa3387eff3195a54": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "87"
            },
            "correct": "Correct"
          },
          "adb27aa50f322c9a": {
            "code": "div:last-child",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "af94e1b49f9fd125": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "b072bc5fe4196a18": {
            "code": "div \u003e div\u003e div\u003e div\u003e div\u003e div\u003e div\u003e div\u003ediv\u003ediv",
            "time": {
              "$numberLong": "24"
            },
            "correct": "Correct"
          },
          "b3e25403b5a88b4c": {
            "code": "",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "b4b9095a568f933b": {
            "code": "div:empty",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": "div div div div div div div div div :last-child",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "b606ffc3e12081e8": {
            "code": ":empty",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": "div:empty",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": "div \u003e not(*)",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "b84f6febc1eb8052": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "b8a7b1aafdd054f6": {
            "code": "div:last-child",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Incorrect"
          },
          "b956b65fac918b0d": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003ediv \u003ediv \u003ediv \u003ediv \u003ediv ",
            "time": {
              "$numberLong": "86"
            },
            "correct": "Correct"
          },
          "bc007c7eb12b758f": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "76"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": "div:empty",
            "time": {
              "$numberLong": "15"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": "",
            "time": {
              "$numberLong": "83"
            },
            "correct": "Incorrect"
          },
          "bd7703518ae1a7cc": {
            "code": "div:empty",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Correct"
          },
          "bde7ea1c0cae6b23": {
            "code": "div div div div div div div div ",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Incorrect"
          },
          "bdf748994d76821c": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "be36e54d93ecfde9": {
            "code": "div",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "31"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": "div \u003e div \u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Correct"
          },
          "c0709a23b54fbdaa": {
            "code": "div:empty",
            "time": {
              "$numberLong": "41"
            },
            "correct": "Correct"
          },
          "c0ba15209a6160bd": {
            "code": "",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "c1605be742d312f7": {
            "code": "div:last-child",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Incorrect"
          },
          "c262edfa406f1703": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "c408a16d75df00b1": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "56"
            },
            "correct": "Correct"
          },
          "c5252199216940cc": {
            "code": "Div \u003e div \u003e div\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "c66aede190d5feb5": {
            "code": "div \u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "c6fe7dc836560d6c": {
            "code": "div:nth-last(7)",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "c80f59106768f8fc": {
            "code": "div div div div div div div div div \u003e div",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Correct"
          },
          "c885a4c52d41db0a": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "67"
            },
            "correct": "Correct"
          },
          "cb3f71bd93fe9387": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "cc334b6cceb2c0c7": {
            "code": "div:empty",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": "div :last-child",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Incorrect"
          },
          "cd80f4cca6f54bbd": {
            "code": "div:nth-child(n+)",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "d16390349858cc0c": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "67"
            },
            "correct": "Correct"
          },
          "d36c84d5b707caa5": {
            "code": "",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "d37d52b418e0a03c": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Correct"
          },
          "d391e126a6560e50": {
            "code": ":nth-last-child",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "d478346a5082cb06": {
            "code": "div \u003e div \u003e div \u003e div\u003e div\u003e div \u003e div \u003e div \u003e div\u003e div",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "d6a4e972f89f58c2": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "d78da08ba35da4da": {
            "code": "div :last-child",
            "time": {
              "$numberLong": "131"
            },
            "correct": "Incorrect"
          },
          "d845ae29dc6912c0": {
            "code": "div:only-child",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "d914030007949409": {
            "code": "div div div div div div div div div div ",
            "time": {
              "$numberLong": "61"
            },
            "correct": "Correct"
          },
          "d971459e842f8ac0": {
            "code": "div div  div div div div div div div div ",
            "time": {
              "$numberLong": "91"
            },
            "correct": "Correct"
          },
          "da737425476c1e9c": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "e0dcdae0eefc008d": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          },
          "e1515b0aaf35f202": {
            "code": "div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div \u003e div",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Correct"
          },
          "e1c3bea6d9deb895": {
            "code": ":nth-child()",
            "time": {
              "$numberLong": "91"
            },
            "correct": "Incorrect"
          },
          "e2118a33ce759dcf": {
            "code": "div:empty",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Correct"
          },
          "e35fd0231118b8d7": {
            "code": "div::only-child",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "e756fa9295ad1eed": {
            "code": "",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "e7a0322647de571b": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "e901657bdc9a5c8e": {
            "code": ":not(:only-child)",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "ea423a7a257965d5": {
            "code": "div:empty",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "ea90a292408db4cd": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "80"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": "div div div div div div div div div div ",
            "time": {
              "$numberLong": "14"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "ec98d8bbf455e711": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": ":empty",
            "time": {
              "$numberLong": "3"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": "div:empty",
            "time": {
              "$numberLong": "58"
            },
            "correct": "Correct"
          },
          "f3d4f734582a568c": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "f560fbf3a1ff7e95": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "114"
            },
            "correct": "Correct"
          },
          "f65b770c17c75f32": {
            "code": "div div  div div div div div div div div",
            "time": {
              "$numberLong": "112"
            },
            "correct": "Correct"
          },
          "f7287e04ee25af0e": {
            "code": "div+div",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "f8f1803efa21809f": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": "div \u003e div ",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "fac46268469de859": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "55"
            },
            "correct": "Correct"
          },
          "fbdeb72cd7b8eac3": {
            "code": "div\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv\u003ediv",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Correct"
          },
          "fd2e01c77a9563f3": {
            "code": "div div div div div div div div div div",
            "time": {
              "$numberLong": "21"
            },
            "correct": "Correct"
          }
        }
      },
      {
        "puzzleIndex": {
          "$numberLong": "9"
        },
        "startTime": {
          "$date": "2018-05-14T18:16:13.017Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "118"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": "[data-attr='c s s']",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "05cafc0b5c9ae78c": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Correct"
          },
          "0879d2a167cef132": {
            "code": "*[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "127"
            },
            "correct": "Correct"
          },
          "08bc05c40aee0ef6": {
            "code": "[data-attr*='s']",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "0af2c05d62662e75": {
            "code": "[data-attr=\"c s s\"]",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "0b51479a7fe6fc9d": {
            "code": "[data-attr.hass\"]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "0b914dc18e1050e4": {
            "code": "div[data-attr='c s s']  div[data-attr='c s s']",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "0c265c8b844334a6": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Correct"
          },
          "0d6d4955615a97f6": {
            "code": "div[data-attr=~\"j s o n\"], div[data-attr]~span",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "0e3b3572c97b9718": {
            "code": "*[data-attr]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "0e7fa1fc555463c5": {
            "code": "div[attr*=\"s\"]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "0e8ceb668d96c395": {
            "code": "div[data-attr]",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "0ea95482cf1613a8": {
            "code": "*[",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "105cabccd21f71d9": {
            "code": "div[data-attr=\"c s s\"\"x m l\"]",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "15ae967d9528d531": {
            "code": "",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "15b78c7bb0b1289c": {
            "code": "[data-attr$=\"s\"]",
            "time": {
              "$numberLong": "105"
            },
            "correct": "Incorrect"
          },
          "15ba94ae0f3567cc": {
            "code": "[data-attr].;",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "183ba0915aa7e0c6": {
            "code": "[data-attr $=\"s\"]",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Incorrect"
          },
          "1a8787d5ac3c2faf": {
            "code": "[data-attr~=s",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": "[data-attr*=\"]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "1d3a37f2f99c1d79": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": "[data-value^=\"x\"]",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "1dfdc28819143b61": {
            "code": "",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "1e7b712f4c1a2174": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "5"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "1"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": "[data-attr = \"s\"]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "21c3a666ff63e628": {
            "code": "",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "23a382d9c5934c7a": {
            "code": "",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "2433fad4af9b8c91": {
            "code": "div~div",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "25e3583c5051e437": {
            "code": "[data-attr ^=\"j \" and \"]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "25eb9ebbb7f770c4": {
            "code": "[data-*=\"s\"]",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Incorrect"
          },
          "2689957139a0b7f3": {
            "code": "data-attr=\"s\"",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Incorrect"
          },
          "2764eadce35f57da": {
            "code": "[data-attr=\"c s s\"]",
            "time": {
              "$numberLong": "123"
            },
            "correct": "Incorrect"
          },
          "280f2bf613bf2356": {
            "code": "[data-attr]",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "2c25bb954402149d": {
            "code": "[data-attr]",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "2ceb4a35b4cf3a82": {
            "code": "[data-attr]",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "2d9ba0d32391edad": {
            "code": "div[data-attr = \"s\"]",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "2e2f307791d02365": {
            "code": "*[data-attr=\"c s s\"] ",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "3028b167807cfbf4": {
            "code": "[attr~=\"\"]",
            "time": {
              "$numberLong": "137"
            },
            "correct": "Incorrect"
          },
          "30613bfc396ce2d9": {
            "code": "[data-attr*=' s']",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "308b0b8c8ed4e4b2": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "56"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": "[data-attr]",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "325dee48ddc82c6a": {
            "code": "*[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "96"
            },
            "correct": "Correct"
          },
          "327403c74f242fc4": {
            "code": "o'a",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "337908399ff8968d": {
            "code": "*[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "69"
            },
            "correct": "Correct"
          },
          "34d3ed1fe14ff7aa": {
            "code": "[data-attr|='s'] ",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "36845437c429a4dc": {
            "code": "",
            "time": {
              "$numberLong": "112"
            },
            "correct": "Incorrect"
          },
          "3894d304c65d5923": {
            "code": "[data-attr *= \" s\"]",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Correct"
          },
          "38a04576b770c322": {
            "code": "[data-attr*=' s']",
            "time": {
              "$numberLong": "107"
            },
            "correct": "Correct"
          },
          "39f73309c9835f82": {
            "code": "[data-attr*='s']",
            "time": {
              "$numberLong": "115"
            },
            "correct": "Incorrect"
          },
          "3ba45068e9680c30": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": "[data-attr",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "3d3363560523d9a8": {
            "code": "[data-attr~=\"c s s\" \"j s\" \"j s o n\"]",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "3d98fc87920f7e0c": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "96"
            },
            "correct": "Correct"
          },
          "3e3d5879b907655c": {
            "code": "[data-attr~='s']",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": "*",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Incorrect"
          },
          "3e559963b46090f4": {
            "code": "div[data-value=s]",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "3f8fa0047ef8f923": {
            "code": "[data-attr^=\"x m l\"]",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "41e6eb3636b0dea6": {
            "code": "div[data-attr='c s s'] ~ span",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "44f18460ff54c8ca": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "109"
            },
            "correct": "Correct"
          },
          "45eb8ba11385b6f8": {
            "code": "div[data-attr=\"c s s\"",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "47b0d3c480c0499f": {
            "code": "div[c s",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "480ab1735929fbdf": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "110"
            },
            "correct": "Correct"
          },
          "484d657a50c7d58b": {
            "code": "[data-attr=\"c s s js \"]",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "497ce103c8ff6039": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "127"
            },
            "correct": "Correct"
          },
          "4b105e51e4c08180": {
            "code": "[data-attr~='s']",
            "time": {
              "$numberLong": "70"
            },
            "correct": "Correct"
          },
          "4f118d5e0b612b81": {
            "code": "[",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "50a53578f3677bb3": {
            "code": "div[data-attr='s*']",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "515d626ac13d7d49": {
            "code": "nth-c",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "52dc8df6d849d1e7": {
            "code": "[data-attr*=' s']",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": "  ",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "53ef06de121e27da": {
            "code": "[data-attr^=\"c\"]",
            "time": {
              "$numberLong": "115"
            },
            "correct": "Incorrect"
          },
          "549834a2acb1f1f4": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "52"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Correct"
          },
          "5501f3e4936798dc": {
            "code": "[data-attr=\"c s s\"]",
            "time": {
              "$numberLong": "131"
            },
            "correct": "Incorrect"
          },
          "5770ae1f766e11be": {
            "code": "[data-attr='s]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "583f70e6235a536f": {
            "code": "",
            "time": {
              "$numberLong": "93"
            },
            "correct": "Incorrect"
          },
          "5bbed2dff9851a90": {
            "code": "[data-attr=\"s\"]",
            "time": {
              "$numberLong": "117"
            },
            "correct": "Incorrect"
          },
          "5bc62ebbe1547412": {
            "code": "*[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Correct"
          },
          "5c43f7ec7ed24f5c": {
            "code": "div",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "5ec5a92c865a392a": {
            "code": "[data-attr*=' s']",
            "time": {
              "$numberLong": "55"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "",
            "time": {
              "$numberLong": "78"
            },
            "correct": "Incorrect"
          },
          "5f3daed844275059": {
            "code": "div.s",
            "time": {
              "$numberLong": "143"
            },
            "correct": "Incorrect"
          },
          "61028ee9d20fceb7": {
            "code": "div[\"s\"]",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "6284773c1c70faa0": {
            "code": "",
            "time": {
              "$numberLong": "107"
            },
            "correct": "Incorrect"
          },
          "649f56b9ee432b59": {
            "code": "[data-attr=\"s\"]",
            "time": {
              "$numberLong": "96"
            },
            "correct": "Incorrect"
          },
          "65bac3ee110db920": {
            "code": "",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "671f84e88e48385e": {
            "code": "[data-attr^=c]",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "68951f264bf7e0af": {
            "code": "div[data-attr.has=]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "69ef442e4c072287": {
            "code": "",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Incorrect"
          },
          "6a022651b53ff8e4": {
            "code": "[data-attr *=s]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "6aa28c09c1567f21": {
            "code": "[data-attr^='s ']",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "6cfd71f6b043c8ae": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Correct"
          },
          "6e3bb276c237e728": {
            "code": "[data-attr*='*']",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "6e61365b7906364a": {
            "code": "span[;b]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "749660598055b524": {
            "code": "div *",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "754a05bec8fc1059": {
            "code": "",
            "time": {
              "$numberLong": "133"
            },
            "correct": "Incorrect"
          },
          "7b4401b3c14db5ae": {
            "code": "[data-attr*=' s']",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Correct"
          },
          "7f279e34bfbd28d8": {
            "code": "div[data-attr*=]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "7f8285ca08a7c23d": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Correct"
          },
          "81f3673d45dbbd11": {
            "code": "[data-attr=\"s\"]",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "8214a075dd4d2e2a": {
            "code": "div[data-attr]",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "830cdf0b52f7e097": {
            "code": "div[data-atr=]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "86b3ac39c3322df7": {
            "code": "[data-attr$='s']",
            "time": {
              "$numberLong": "104"
            },
            "correct": "Incorrect"
          },
          "87a6eaef0181d2b0": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Correct"
          },
          "8b110191c4ec82e6": {
            "code": "[attr*=\"s\"]",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "8b4acd6ccf915b89": {
            "code": "[data-attr]",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Incorrect"
          },
          "8c1f7ac2879400f3": {
            "code": "",
            "time": {
              "$numberLong": "102"
            },
            "correct": "Incorrect"
          },
          "90e1114fbfc49b4c": {
            "code": "",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "911414941b2523a0": {
            "code": "[data-attr*=\"c\"]",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Incorrect"
          },
          "911bca702e73f25e": {
            "code": "*[data-attr=\"s\"]",
            "time": {
              "$numberLong": "133"
            },
            "correct": "Incorrect"
          },
          "916088f8a25f68ab": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Correct"
          },
          "9379cba22d7ac999": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "133"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "60"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": "[data-attr=\"c s s\"]",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "9e6c2caff1d3b44e": {
            "code": "",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "9ebd206bb5ff5c50": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Correct"
          },
          "9f2dfe266d0926fd": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "127"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "[data-attr ^=\"j\" ]",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "a9e4e4bf5bbd44e2": {
            "code": "div~span~div~div~div",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "aa3387eff3195a54": {
            "code": "[attr = 's'] [attr = 'c s s']",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "adb27aa50f322c9a": {
            "code": "[data-attr=\"c s s\"]",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "af94e1b49f9fd125": {
            "code": "[data-attr=\"x m l]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "b072bc5fe4196a18": {
            "code": "[data-attr~= ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "b3e25403b5a88b4c": {
            "code": "=(",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "b4b9095a568f933b": {
            "code": "*[data-attr*=' s']",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": ".c s s~div",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "b606ffc3e12081e8": {
            "code": "[data-attr*=\"x\"]",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "b62ddb49add38fb7": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": "[data-attr*= \" s\"]",
            "time": {
              "$numberLong": "94"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": "[data-attr = 's']",
            "time": {
              "$numberLong": "100"
            },
            "correct": "Incorrect"
          },
          "b84f6febc1eb8052": {
            "code": "[data-attr$='s']",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "b8a7b1aafdd054f6": {
            "code": "",
            "time": {
              "$numberLong": "103"
            },
            "correct": "Incorrect"
          },
          "b956b65fac918b0d": {
            "code": "[data-attr = 's']",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "bc007c7eb12b758f": {
            "code": "[data-attr]",
            "time": {
              "$numberLong": "117"
            },
            "correct": "Incorrect"
          },
          "bca8480f5abd3622": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": "[data-attr*=\"s\"] ",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "bd7703518ae1a7cc": {
            "code": "[data-attr=\"s\"]",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "bde7ea1c0cae6b23": {
            "code": "",
            "time": {
              "$numberLong": "136"
            },
            "correct": "Incorrect"
          },
          "bdf748994d76821c": {
            "code": "div[data-attr = s]",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "be36e54d93ecfde9": {
            "code": "*[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "59"
            },
            "correct": "Correct"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "83"
            },
            "correct": "Correct"
          },
          "bfe18e93e86f6198": {
            "code": "[data-attr*=s]",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "c0709a23b54fbdaa": {
            "code": "",
            "time": {
              "$numberLong": "133"
            },
            "correct": "Incorrect"
          },
          "c0ba15209a6160bd": {
            "code": "",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "c1605be742d312f7": {
            "code": "div span ",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "c262edfa406f1703": {
            "code": "",
            "time": {
              "$numberLong": "92"
            },
            "correct": "Incorrect"
          },
          "c408a16d75df00b1": {
            "code": "",
            "time": {
              "$numberLong": "117"
            },
            "correct": "Incorrect"
          },
          "c5252199216940cc": {
            "code": "[data-attr] ",
            "time": {
              "$numberLong": "108"
            },
            "correct": "Incorrect"
          },
          "c66aede190d5feb5": {
            "code": "*[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "65"
            },
            "correct": "Correct"
          },
          "c6fe7dc836560d6c": {
            "code": "[data-attr]",
            "time": {
              "$numberLong": "108"
            },
            "correct": "Incorrect"
          },
          "c80f59106768f8fc": {
            "code": "[data-attr~='s']",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "c885a4c52d41db0a": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": "",
            "time": {
              "$numberLong": "89"
            },
            "correct": "Incorrect"
          },
          "cb3f71bd93fe9387": {
            "code": "[data-attr*=\" s\"] ",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "cc334b6cceb2c0c7": {
            "code": "",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "cccbd9bb94b15ee6": {
            "code": "[data-attr='c s s']",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "cd80f4cca6f54bbd": {
            "code": "[data-attr~\"c\"]",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "d16390349858cc0c": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Correct"
          },
          "d36c84d5b707caa5": {
            "code": "[data-attr$=\"s\"]",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Incorrect"
          },
          "d37d52b418e0a03c": {
            "code": "[data-attr*=\"c j\"]",
            "time": {
              "$numberLong": "118"
            },
            "correct": "Incorrect"
          },
          "d391e126a6560e50": {
            "code": "span ",
            "time": {
              "$numberLong": "61"
            },
            "correct": "Incorrect"
          },
          "d478346a5082cb06": {
            "code": "[data-attr~=c]",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "d6a4e972f89f58c2": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "138"
            },
            "correct": "Correct"
          },
          "d78da08ba35da4da": {
            "code": "div [data-attr=] ",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "d845ae29dc6912c0": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "99"
            },
            "correct": "Correct"
          },
          "d914030007949409": {
            "code": "div[data-attr*=' s']",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "d971459e842f8ac0": {
            "code": "div[data-attr=\"c s s\"]~span[data-attr]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "da737425476c1e9c": {
            "code": "[data-attr*=\"s \"]",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "e0dcdae0eefc008d": {
            "code": "data-attr(s)",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "e1515b0aaf35f202": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "115"
            },
            "correct": "Correct"
          },
          "e1c3bea6d9deb895": {
            "code": "",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "e2118a33ce759dcf": {
            "code": "*[data-attr*=\" s",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Correct"
          },
          "e35fd0231118b8d7": {
            "code": "[data-attr = \"j s o n\"]",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "e756fa9295ad1eed": {
            "code": "[data-attr=\"s\"]",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "e7a0322647de571b": {
            "code": "div[data-attr=\"c s s\"] spa ",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "e901657bdc9a5c8e": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "120"
            },
            "correct": "Correct"
          },
          "ea423a7a257965d5": {
            "code": "*[data-attr*=\"s\"!=\"p\"]",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "ea90a292408db4cd": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "61"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": "[data-attr~=\"s\"]",
            "time": {
              "$numberLong": "72"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": "[data-attr]^=\"",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "ec98d8bbf455e711": {
            "code": ".sasfdsafadfadfadf\\",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "ecf284cb61b39042": {
            "code": "[data-attr~=s]",
            "time": {
              "$numberLong": "8"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": "[data-attr] ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "f134617bd286a050": {
            "code": "[data-attr*=\" s\"]",
            "time": {
              "$numberLong": "94"
            },
            "correct": "Correct"
          },
          "f3d4f734582a568c": {
            "code": "",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "f560fbf3a1ff7e95": {
            "code": "div[data-attr=\"c s s\"]",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "f65b770c17c75f32": {
            "code": "[data-attr=\"j s\"]",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Incorrect"
          },
          "f7287e04ee25af0e": {
            "code": "div[data-attr~='j s']",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "f8f1803efa21809f": {
            "code": "[data-attr~='s']",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": "[data-attr] ",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "fac46268469de859": {
            "code": "div[data-attr=\"s\"]",
            "time": {
              "$numberLong": "130"
            },
            "correct": "Incorrect"
          },
          "fbdeb72cd7b8eac3": {
            "code": "",
            "time": {
              "$numberLong": "114"
            },
            "correct": "Incorrect"
          },
          "fd2e01c77a9563f3": {
            "code": "div[data-attr~=\"s\"] ",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          }
        }
      }
    ],
    "player_input": {},
    "puzzle_index": {
      "$numberLong": "9"
    },
    "round_phase": "End",
    "start_countdown": {
      "$numberLong": "0"
    },
    "round_countdown": {
      "$numberLong": "0"
    },
    "alias": "rsschool"
  },
  {
    "_id": {
      "$oid": "5af9c7624e08a2000b000028"
    },
    "game": "CSSQuickDraw",
    "game_master_id": "c85e3ad27c035cfb",
    "puzzles": [
      {
        "game": "CSSQuickDraw",
        "name": "Bits and Pieces",
        "input": "\u003cspan id=\"me\" data-qdid=\"0\"\u003e\u003c/span\u003e\u003cdiv id=\"not-me\" data-qdid=\"1\"\u003e\u003c/div\u003e\u003cdiv id=\"me\" data-qdid=\"2\"\u003e\u003c/div\u003e\u003cspan id=\"not-me-either\" data-qdid=\"3\"\u003e\u003c/div\u003e",
        "expected": "[\"2\"]",
        "hidden": [],
        "options": {
          "timeLimit": {
            "$numberLong": "150"
          },
          "bannedCharacters": [
            ":",
            "~",
            "+"
          ]
        },
        "sandboxSettings": {
          "timeout": {
            "$numberLong": "150"
          },
          "reloadWorkers": null,
          "refillWorkers": null,
          "inputCopies": null
        }
      }
    ],
    "participants": {
      "03a2461f7613d00a": {
        "uid": "03a2461f7613d00a"
      },
      "053b976e830f1380": {
        "uid": "053b976e830f1380"
      },
      "05cafc0b5c9ae78c": {
        "uid": "05cafc0b5c9ae78c"
      },
      "0879d2a167cef132": {
        "uid": "0879d2a167cef132"
      },
      "08bc05c40aee0ef6": {
        "uid": "08bc05c40aee0ef6"
      },
      "0af2c05d62662e75": {
        "uid": "0af2c05d62662e75"
      },
      "0b51479a7fe6fc9d": {
        "uid": "0b51479a7fe6fc9d"
      },
      "0b914dc18e1050e4": {
        "uid": "0b914dc18e1050e4"
      },
      "0c265c8b844334a6": {
        "uid": "0c265c8b844334a6"
      },
      "0d6d4955615a97f6": {
        "uid": "0d6d4955615a97f6"
      },
      "0e3b3572c97b9718": {
        "uid": "0e3b3572c97b9718"
      },
      "0e7fa1fc555463c5": {
        "uid": "0e7fa1fc555463c5"
      },
      "0e8ceb668d96c395": {
        "uid": "0e8ceb668d96c395"
      },
      "0ea95482cf1613a8": {
        "uid": "0ea95482cf1613a8"
      },
      "105cabccd21f71d9": {
        "uid": "105cabccd21f71d9"
      },
      "15ae967d9528d531": {
        "uid": "15ae967d9528d531"
      },
      "15b78c7bb0b1289c": {
        "uid": "15b78c7bb0b1289c"
      },
      "15ba94ae0f3567cc": {
        "uid": "15ba94ae0f3567cc"
      },
      "183ba0915aa7e0c6": {
        "uid": "183ba0915aa7e0c6"
      },
      "1a8787d5ac3c2faf": {
        "uid": "1a8787d5ac3c2faf"
      },
      "1b6fedf5a10e00b3": {
        "uid": "1b6fedf5a10e00b3"
      },
      "1d3a37f2f99c1d79": {
        "uid": "1d3a37f2f99c1d79"
      },
      "1dc1b34c3693ea0a": {
        "uid": "1dc1b34c3693ea0a"
      },
      "1dfdc28819143b61": {
        "uid": "1dfdc28819143b61"
      },
      "1e7b712f4c1a2174": {
        "uid": "1e7b712f4c1a2174"
      },
      "1f7dcabd98f331fe": {
        "uid": "1f7dcabd98f331fe"
      },
      "209d7079788ec8b6": {
        "uid": "209d7079788ec8b6"
      },
      "21c3a666ff63e628": {
        "uid": "21c3a666ff63e628"
      },
      "23a382d9c5934c7a": {
        "uid": "23a382d9c5934c7a"
      },
      "2433fad4af9b8c91": {
        "uid": "2433fad4af9b8c91"
      },
      "25e3583c5051e437": {
        "uid": "25e3583c5051e437"
      },
      "25eb9ebbb7f770c4": {
        "uid": "25eb9ebbb7f770c4"
      },
      "2689957139a0b7f3": {
        "uid": "2689957139a0b7f3"
      },
      "2764eadce35f57da": {
        "uid": "2764eadce35f57da"
      },
      "280f2bf613bf2356": {
        "uid": "280f2bf613bf2356"
      },
      "2c25bb954402149d": {
        "uid": "2c25bb954402149d"
      },
      "2ceb4a35b4cf3a82": {
        "uid": "2ceb4a35b4cf3a82"
      },
      "2d9ba0d32391edad": {
        "uid": "2d9ba0d32391edad"
      },
      "2e24514882f54cb5": {
        "uid": "2e24514882f54cb5"
      },
      "2e2f307791d02365": {
        "uid": "2e2f307791d02365"
      },
      "30613bfc396ce2d9": {
        "uid": "30613bfc396ce2d9"
      },
      "308b0b8c8ed4e4b2": {
        "uid": "308b0b8c8ed4e4b2"
      },
      "30aded38fc2a4e31": {
        "uid": "30aded38fc2a4e31"
      },
      "325dee48ddc82c6a": {
        "uid": "325dee48ddc82c6a"
      },
      "327403c74f242fc4": {
        "uid": "327403c74f242fc4"
      },
      "337908399ff8968d": {
        "uid": "337908399ff8968d"
      },
      "34d3ed1fe14ff7aa": {
        "uid": "34d3ed1fe14ff7aa"
      },
      "36845437c429a4dc": {
        "uid": "36845437c429a4dc"
      },
      "3894d304c65d5923": {
        "uid": "3894d304c65d5923"
      },
      "38a04576b770c322": {
        "uid": "38a04576b770c322"
      },
      "39e6bb0cad07022e": {
        "uid": "39e6bb0cad07022e"
      },
      "39f73309c9835f82": {
        "uid": "39f73309c9835f82"
      },
      "3ba45068e9680c30": {
        "uid": "3ba45068e9680c30"
      },
      "3d0181f3e81ef243": {
        "uid": "3d0181f3e81ef243"
      },
      "3d3363560523d9a8": {
        "uid": "3d3363560523d9a8"
      },
      "3d98fc87920f7e0c": {
        "uid": "3d98fc87920f7e0c"
      },
      "3e3d5879b907655c": {
        "uid": "3e3d5879b907655c"
      },
      "3e3e38b35680eeb3": {
        "uid": "3e3e38b35680eeb3"
      },
      "3e559963b46090f4": {
        "uid": "3e559963b46090f4"
      },
      "3f8fa0047ef8f923": {
        "uid": "3f8fa0047ef8f923"
      },
      "41e6eb3636b0dea6": {
        "uid": "41e6eb3636b0dea6"
      },
      "44f18460ff54c8ca": {
        "uid": "44f18460ff54c8ca"
      },
      "45eb8ba11385b6f8": {
        "uid": "45eb8ba11385b6f8"
      },
      "47b0d3c480c0499f": {
        "uid": "47b0d3c480c0499f"
      },
      "480ab1735929fbdf": {
        "uid": "480ab1735929fbdf"
      },
      "484d657a50c7d58b": {
        "uid": "484d657a50c7d58b"
      },
      "497ce103c8ff6039": {
        "uid": "497ce103c8ff6039"
      },
      "4b105e51e4c08180": {
        "uid": "4b105e51e4c08180"
      },
      "4f118d5e0b612b81": {
        "uid": "4f118d5e0b612b81"
      },
      "50a53578f3677bb3": {
        "uid": "50a53578f3677bb3"
      },
      "515d626ac13d7d49": {
        "uid": "515d626ac13d7d49"
      },
      "52dc8df6d849d1e7": {
        "uid": "52dc8df6d849d1e7"
      },
      "532967272335f916": {
        "uid": "532967272335f916"
      },
      "53ef06de121e27da": {
        "uid": "53ef06de121e27da"
      },
      "549834a2acb1f1f4": {
        "uid": "549834a2acb1f1f4"
      },
      "54e73de62df42630": {
        "uid": "54e73de62df42630"
      },
      "5501f3e4936798dc": {
        "uid": "5501f3e4936798dc"
      },
      "5549ebaf4b8de4a9": {
        "uid": "5549ebaf4b8de4a9"
      },
      "5770ae1f766e11be": {
        "uid": "5770ae1f766e11be"
      },
      "5bbed2dff9851a90": {
        "uid": "5bbed2dff9851a90"
      },
      "5bc62ebbe1547412": {
        "uid": "5bc62ebbe1547412"
      },
      "5c43f7ec7ed24f5c": {
        "uid": "5c43f7ec7ed24f5c"
      },
      "5ec5a92c865a392a": {
        "uid": "5ec5a92c865a392a"
      },
      "5f2f9653eecd1dcd": {
        "uid": "5f2f9653eecd1dcd"
      },
      "6284773c1c70faa0": {
        "uid": "6284773c1c70faa0"
      },
      "649f56b9ee432b59": {
        "uid": "649f56b9ee432b59"
      },
      "65bac3ee110db920": {
        "uid": "65bac3ee110db920"
      },
      "68951f264bf7e0af": {
        "uid": "68951f264bf7e0af"
      },
      "69ef442e4c072287": {
        "uid": "69ef442e4c072287"
      },
      "6a022651b53ff8e4": {
        "uid": "6a022651b53ff8e4"
      },
      "6aa28c09c1567f21": {
        "uid": "6aa28c09c1567f21"
      },
      "6cfd71f6b043c8ae": {
        "uid": "6cfd71f6b043c8ae"
      },
      "6e3bb276c237e728": {
        "uid": "6e3bb276c237e728"
      },
      "6e61365b7906364a": {
        "uid": "6e61365b7906364a"
      },
      "749660598055b524": {
        "uid": "749660598055b524"
      },
      "754a05bec8fc1059": {
        "uid": "754a05bec8fc1059"
      },
      "7b4401b3c14db5ae": {
        "uid": "7b4401b3c14db5ae"
      },
      "7e5b2cec850a2aff": {
        "uid": "7e5b2cec850a2aff"
      },
      "7f279e34bfbd28d8": {
        "uid": "7f279e34bfbd28d8"
      },
      "7f8285ca08a7c23d": {
        "uid": "7f8285ca08a7c23d"
      },
      "81f2828320160384": {
        "uid": "81f2828320160384"
      },
      "81f3673d45dbbd11": {
        "uid": "81f3673d45dbbd11"
      },
      "830cdf0b52f7e097": {
        "uid": "830cdf0b52f7e097"
      },
      "86b3ac39c3322df7": {
        "uid": "86b3ac39c3322df7"
      },
      "87a6eaef0181d2b0": {
        "uid": "87a6eaef0181d2b0"
      },
      "8b110191c4ec82e6": {
        "uid": "8b110191c4ec82e6"
      },
      "8c1f7ac2879400f3": {
        "uid": "8c1f7ac2879400f3"
      },
      "90e1114fbfc49b4c": {
        "uid": "90e1114fbfc49b4c"
      },
      "911414941b2523a0": {
        "uid": "911414941b2523a0"
      },
      "911bca702e73f25e": {
        "uid": "911bca702e73f25e"
      },
      "916088f8a25f68ab": {
        "uid": "916088f8a25f68ab"
      },
      "9379cba22d7ac999": {
        "uid": "9379cba22d7ac999"
      },
      "93a6a7d94f4918ff": {
        "uid": "93a6a7d94f4918ff"
      },
      "972d87a6873ec9b3": {
        "uid": "972d87a6873ec9b3"
      },
      "9e6c2caff1d3b44e": {
        "uid": "9e6c2caff1d3b44e"
      },
      "9ebd206bb5ff5c50": {
        "uid": "9ebd206bb5ff5c50"
      },
      "9f2dfe266d0926fd": {
        "uid": "9f2dfe266d0926fd"
      },
      "a43e0947ef6a39e6": {
        "uid": "a43e0947ef6a39e6"
      },
      "a7f10cfda0281de1": {
        "uid": "a7f10cfda0281de1"
      },
      "a9e4e4bf5bbd44e2": {
        "uid": "a9e4e4bf5bbd44e2"
      },
      "aa3387eff3195a54": {
        "uid": "aa3387eff3195a54"
      },
      "adb27aa50f322c9a": {
        "uid": "adb27aa50f322c9a"
      },
      "af94e1b49f9fd125": {
        "uid": "af94e1b49f9fd125"
      },
      "b072bc5fe4196a18": {
        "uid": "b072bc5fe4196a18"
      },
      "b3e25403b5a88b4c": {
        "uid": "b3e25403b5a88b4c"
      },
      "b4b9095a568f933b": {
        "uid": "b4b9095a568f933b"
      },
      "b548101a3c7f3918": {
        "uid": "b548101a3c7f3918"
      },
      "b606ffc3e12081e8": {
        "uid": "b606ffc3e12081e8"
      },
      "b62ddb49add38fb7": {
        "uid": "b62ddb49add38fb7"
      },
      "b6a56483a4bfda2e": {
        "uid": "b6a56483a4bfda2e"
      },
      "b81f90294ff8a0d0": {
        "uid": "b81f90294ff8a0d0"
      },
      "b84f6febc1eb8052": {
        "uid": "b84f6febc1eb8052"
      },
      "b8a7b1aafdd054f6": {
        "uid": "b8a7b1aafdd054f6"
      },
      "b956b65fac918b0d": {
        "uid": "b956b65fac918b0d"
      },
      "bc007c7eb12b758f": {
        "uid": "bc007c7eb12b758f"
      },
      "bca8480f5abd3622": {
        "uid": "bca8480f5abd3622"
      },
      "bd750af9cdc1205a": {
        "uid": "bd750af9cdc1205a"
      },
      "bd7703518ae1a7cc": {
        "uid": "bd7703518ae1a7cc"
      },
      "bde7ea1c0cae6b23": {
        "uid": "bde7ea1c0cae6b23"
      },
      "bdf748994d76821c": {
        "uid": "bdf748994d76821c"
      },
      "be36e54d93ecfde9": {
        "uid": "be36e54d93ecfde9"
      },
      "bfb56b4a3a4e3ae0": {
        "uid": "bfb56b4a3a4e3ae0"
      },
      "bfe18e93e86f6198": {
        "uid": "bfe18e93e86f6198"
      },
      "c0709a23b54fbdaa": {
        "uid": "c0709a23b54fbdaa"
      },
      "c0ba15209a6160bd": {
        "uid": "c0ba15209a6160bd"
      },
      "c1605be742d312f7": {
        "uid": "c1605be742d312f7"
      },
      "c262edfa406f1703": {
        "uid": "c262edfa406f1703"
      },
      "c408a16d75df00b1": {
        "uid": "c408a16d75df00b1"
      },
      "c66aede190d5feb5": {
        "uid": "c66aede190d5feb5"
      },
      "c6fe7dc836560d6c": {
        "uid": "c6fe7dc836560d6c"
      },
      "c80f59106768f8fc": {
        "uid": "c80f59106768f8fc"
      },
      "c885a4c52d41db0a": {
        "uid": "c885a4c52d41db0a"
      },
      "c95f2638084b7864": {
        "uid": "c95f2638084b7864"
      },
      "cb3f71bd93fe9387": {
        "uid": "cb3f71bd93fe9387"
      },
      "cc334b6cceb2c0c7": {
        "uid": "cc334b6cceb2c0c7"
      },
      "cccbd9bb94b15ee6": {
        "uid": "cccbd9bb94b15ee6"
      },
      "cd80f4cca6f54bbd": {
        "uid": "cd80f4cca6f54bbd"
      },
      "d16390349858cc0c": {
        "uid": "d16390349858cc0c"
      },
      "d2ec74f1f660690f": {
        "uid": "d2ec74f1f660690f"
      },
      "d36c84d5b707caa5": {
        "uid": "d36c84d5b707caa5"
      },
      "d37d52b418e0a03c": {
        "uid": "d37d52b418e0a03c"
      },
      "d391e126a6560e50": {
        "uid": "d391e126a6560e50"
      },
      "d478346a5082cb06": {
        "uid": "d478346a5082cb06"
      },
      "d6a4e972f89f58c2": {
        "uid": "d6a4e972f89f58c2"
      },
      "d78da08ba35da4da": {
        "uid": "d78da08ba35da4da"
      },
      "d845ae29dc6912c0": {
        "uid": "d845ae29dc6912c0"
      },
      "d914030007949409": {
        "uid": "d914030007949409"
      },
      "d971459e842f8ac0": {
        "uid": "d971459e842f8ac0"
      },
      "da737425476c1e9c": {
        "uid": "da737425476c1e9c"
      },
      "e0dcdae0eefc008d": {
        "uid": "e0dcdae0eefc008d"
      },
      "e1515b0aaf35f202": {
        "uid": "e1515b0aaf35f202"
      },
      "e1c3bea6d9deb895": {
        "uid": "e1c3bea6d9deb895"
      },
      "e2118a33ce759dcf": {
        "uid": "e2118a33ce759dcf"
      },
      "e35fd0231118b8d7": {
        "uid": "e35fd0231118b8d7"
      },
      "e756fa9295ad1eed": {
        "uid": "e756fa9295ad1eed"
      },
      "e7a0322647de571b": {
        "uid": "e7a0322647de571b"
      },
      "e901657bdc9a5c8e": {
        "uid": "e901657bdc9a5c8e"
      },
      "ea423a7a257965d5": {
        "uid": "ea423a7a257965d5"
      },
      "ea90a292408db4cd": {
        "uid": "ea90a292408db4cd"
      },
      "eb370cad0cdbdbbc": {
        "uid": "eb370cad0cdbdbbc"
      },
      "ec8c03effc5b296e": {
        "uid": "ec8c03effc5b296e"
      },
      "ec98d8bbf455e711": {
        "uid": "ec98d8bbf455e711"
      },
      "ecf284cb61b39042": {
        "uid": "ecf284cb61b39042"
      },
      "eea8905c611f6305": {
        "uid": "eea8905c611f6305"
      },
      "f134617bd286a050": {
        "uid": "f134617bd286a050"
      },
      "f3d4f734582a568c": {
        "uid": "f3d4f734582a568c"
      },
      "f560fbf3a1ff7e95": {
        "uid": "f560fbf3a1ff7e95"
      },
      "f62cb888146a1b0b": {
        "uid": "f62cb888146a1b0b"
      },
      "f65b770c17c75f32": {
        "uid": "f65b770c17c75f32"
      },
      "f7287e04ee25af0e": {
        "uid": "f7287e04ee25af0e"
      },
      "f8f1803efa21809f": {
        "uid": "f8f1803efa21809f"
      },
      "f94da096f90b989a": {
        "uid": "f94da096f90b989a"
      },
      "fac46268469de859": {
        "uid": "fac46268469de859"
      },
      "fbdeb72cd7b8eac3": {
        "uid": "fbdeb72cd7b8eac3"
      },
      "fd2e01c77a9563f3": {
        "uid": "fd2e01c77a9563f3"
      }
    },
    "rounds": [
      {
        "puzzleIndex": {
          "$numberLong": "0"
        },
        "startTime": {
          "$date": "2018-05-14T17:32:08.225Z"
        },
        "solutions": {
          "03a2461f7613d00a": {
            "code": "div#me",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "053b976e830f1380": {
            "code": "div#me",
            "time": {
              "$numberLong": "67"
            },
            "correct": "Correct"
          },
          "05cafc0b5c9ae78c": {
            "code": "#me#",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "0879d2a167cef132": {
            "code": "div#me",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "08bc05c40aee0ef6": {
            "code": "div#me",
            "time": {
              "$numberLong": "47"
            },
            "correct": "Correct"
          },
          "0af2c05d62662e75": {
            "code": "div[id=\"me\"]",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Correct"
          },
          "0b51479a7fe6fc9d": {
            "code": "getElementById('me')",
            "time": {
              "$numberLong": "62"
            },
            "correct": "Incorrect"
          },
          "0b914dc18e1050e4": {
            "code": ":nth-child(3)",
            "time": {
              "$numberLong": "66"
            },
            "correct": "Incorrect"
          },
          "0c265c8b844334a6": {
            "code": "div[id=\"me",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Correct"
          },
          "0d6d4955615a97f6": {
            "code": "div#me",
            "time": {
              "$numberLong": "16"
            },
            "correct": "Correct"
          },
          "0e3b3572c97b9718": {
            "code": "div#me",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Correct"
          },
          "0e7fa1fc555463c5": {
            "code": "div#me",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "0e8ceb668d96c395": {
            "code": "div#me",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "0ea95482cf1613a8": {
            "code": "div#me",
            "time": {
              "$numberLong": "70"
            },
            "correct": "Correct"
          },
          "105cabccd21f71d9": {
            "code": "div#me",
            "time": {
              "$numberLong": "94"
            },
            "correct": "Correct"
          },
          "15ae967d9528d531": {
            "code": "div#me",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Correct"
          },
          "15b78c7bb0b1289c": {
            "code": "div#me",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "15ba94ae0f3567cc": {
            "code": "div#me",
            "time": {
              "$numberLong": "96"
            },
            "correct": "Correct"
          },
          "183ba0915aa7e0c6": {
            "code": "div#me",
            "time": {
              "$numberLong": "31"
            },
            "correct": "Correct"
          },
          "1a8787d5ac3c2faf": {
            "code": "div#me",
            "time": {
              "$numberLong": "93"
            },
            "correct": "Correct"
          },
          "1b6fedf5a10e00b3": {
            "code": "div#me",
            "time": {
              "$numberLong": "101"
            },
            "correct": "Correct"
          },
          "1d3a37f2f99c1d79": {
            "code": "div#me",
            "time": {
              "$numberLong": "86"
            },
            "correct": "Correct"
          },
          "1dc1b34c3693ea0a": {
            "code": "div#me",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "1dfdc28819143b61": {
            "code": "#not-me+#me",
            "time": {
              "$numberLong": "68"
            },
            "correct": "Incorrect"
          },
          "1e7b712f4c1a2174": {
            "code": "div#me",
            "time": {
              "$numberLong": "86"
            },
            "correct": "Correct"
          },
          "1f7dcabd98f331fe": {
            "code": "div#me",
            "time": {
              "$numberLong": "61"
            },
            "correct": "Correct"
          },
          "209d7079788ec8b6": {
            "code": "div[id=\"me\"]",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "21c3a666ff63e628": {
            "code": "div#me",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Correct"
          },
          "23a382d9c5934c7a": {
            "code": "div#me",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Correct"
          },
          "2433fad4af9b8c91": {
            "code": "#me:last-child(){}",
            "time": {
              "$numberLong": "77"
            },
            "correct": "Incorrect"
          },
          "25e3583c5051e437": {
            "code": "div#me",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Correct"
          },
          "25eb9ebbb7f770c4": {
            "code": "div#me",
            "time": {
              "$numberLong": "28"
            },
            "correct": "Correct"
          },
          "2689957139a0b7f3": {
            "code": "div~div",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "2764eadce35f57da": {
            "code": "div#me",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "280f2bf613bf2356": {
            "code": "div[id=\"me\"]",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "2c25bb954402149d": {
            "code": "div[id=me",
            "time": {
              "$numberLong": "98"
            },
            "correct": "Correct"
          },
          "2ceb4a35b4cf3a82": {
            "code": "div#me",
            "time": {
              "$numberLong": "52"
            },
            "correct": "Correct"
          },
          "2d9ba0d32391edad": {
            "code": "div#me",
            "time": {
              "$numberLong": "84"
            },
            "correct": "Correct"
          },
          "2e24514882f54cb5": {
            "code": "div#me",
            "time": {
              "$numberLong": "86"
            },
            "correct": "Correct"
          },
          "2e2f307791d02365": {
            "code": "div#me",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "30613bfc396ce2d9": {
            "code": "div#me",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "308b0b8c8ed4e4b2": {
            "code": "div[id=me]",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "30aded38fc2a4e31": {
            "code": "div#me",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "325dee48ddc82c6a": {
            "code": "div#me",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "327403c74f242fc4": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "337908399ff8968d": {
            "code": "div#me",
            "time": {
              "$numberLong": "30"
            },
            "correct": "Correct"
          },
          "34d3ed1fe14ff7aa": {
            "code": "div#me",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "36845437c429a4dc": {
            "code": "div#me",
            "time": {
              "$numberLong": "67"
            },
            "correct": "Correct"
          },
          "3894d304c65d5923": {
            "code": "#me",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "38a04576b770c322": {
            "code": "div#me",
            "time": {
              "$numberLong": "23"
            },
            "correct": "Correct"
          },
          "39e6bb0cad07022e": {
            "code": "d#me",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "39f73309c9835f82": {
            "code": "div[id='me']",
            "time": {
              "$numberLong": "114"
            },
            "correct": "Correct"
          },
          "3ba45068e9680c30": {
            "code": "div#me",
            "time": {
              "$numberLong": "70"
            },
            "correct": "Correct"
          },
          "3d0181f3e81ef243": {
            "code": "div#me",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "3d3363560523d9a8": {
            "code": "div#me",
            "time": {
              "$numberLong": "98"
            },
            "correct": "Correct"
          },
          "3d98fc87920f7e0c": {
            "code": "nth-child(3)",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Incorrect"
          },
          "3e3d5879b907655c": {
            "code": "div#me",
            "time": {
              "$numberLong": "79"
            },
            "correct": "Correct"
          },
          "3e3e38b35680eeb3": {
            "code": "div#me",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "3e559963b46090f4": {
            "code": "div#me",
            "time": {
              "$numberLong": "62"
            },
            "correct": "Correct"
          },
          "3f8fa0047ef8f923": {
            "code": "[id=\"not-me + #me",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "41e6eb3636b0dea6": {
            "code": "div#me",
            "time": {
              "$numberLong": "19"
            },
            "correct": "Correct"
          },
          "44f18460ff54c8ca": {
            "code": "div#me",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "45eb8ba11385b6f8": {
            "code": "#me",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "47b0d3c480c0499f": {
            "code": "div#me",
            "time": {
              "$numberLong": "72"
            },
            "correct": "Correct"
          },
          "480ab1735929fbdf": {
            "code": "div #me {}",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Incorrect"
          },
          "484d657a50c7d58b": {
            "code": "div#me",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "497ce103c8ff6039": {
            "code": "div#me",
            "time": {
              "$numberLong": "102"
            },
            "correct": "Correct"
          },
          "4b105e51e4c08180": {
            "code": "div#me",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "4f118d5e0b612b81": {
            "code": "div['id = \"me\"']",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Incorrect"
          },
          "50a53578f3677bb3": {
            "code": "#me:nth-child()",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "515d626ac13d7d49": {
            "code": "nth-child(3n)",
            "time": {
              "$numberLong": "133"
            },
            "correct": "Incorrect"
          },
          "52dc8df6d849d1e7": {
            "code": "div[id='me']",
            "time": {
              "$numberLong": "41"
            },
            "correct": "Correct"
          },
          "532967272335f916": {
            "code": "div#me",
            "time": {
              "$numberLong": "111"
            },
            "correct": "Correct"
          },
          "53ef06de121e27da": {
            "code": "div#me",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "549834a2acb1f1f4": {
            "code": "div#me",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "54e73de62df42630": {
            "code": "div[id=me]",
            "time": {
              "$numberLong": "128"
            },
            "correct": "Correct"
          },
          "5501f3e4936798dc": {
            "code": "div#me",
            "time": {
              "$numberLong": "38"
            },
            "correct": "Correct"
          },
          "5549ebaf4b8de4a9": {
            "code": "div:me",
            "time": {
              "$numberLong": "148"
            },
            "correct": "Incorrect"
          },
          "5770ae1f766e11be": {
            "code": "div#me",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Correct"
          },
          "5bbed2dff9851a90": {
            "code": "div#me",
            "time": {
              "$numberLong": "116"
            },
            "correct": "Correct"
          },
          "5bc62ebbe1547412": {
            "code": "div#me",
            "time": {
              "$numberLong": "99"
            },
            "correct": "Correct"
          },
          "5c43f7ec7ed24f5c": {
            "code": "div ",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "5ec5a92c865a392a": {
            "code": "div#me",
            "time": {
              "$numberLong": "41"
            },
            "correct": "Correct"
          },
          "5f2f9653eecd1dcd": {
            "code": "div#me",
            "time": {
              "$numberLong": "121"
            },
            "correct": "Correct"
          },
          "6284773c1c70faa0": {
            "code": "div#me",
            "time": {
              "$numberLong": "17"
            },
            "correct": "Correct"
          },
          "649f56b9ee432b59": {
            "code": "div#me",
            "time": {
              "$numberLong": "36"
            },
            "correct": "Correct"
          },
          "65bac3ee110db920": {
            "code": "span\u003e#me",
            "time": {
              "$numberLong": "106"
            },
            "correct": "Incorrect"
          },
          "68951f264bf7e0af": {
            "code": "div#me",
            "time": {
              "$numberLong": "141"
            },
            "correct": "Correct"
          },
          "69ef442e4c072287": {
            "code": "div#me",
            "time": {
              "$numberLong": "113"
            },
            "correct": "Correct"
          },
          "6a022651b53ff8e4": {
            "code": "div#me",
            "time": {
              "$numberLong": "83"
            },
            "correct": "Correct"
          },
          "6aa28c09c1567f21": {
            "code": "div#me",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "6cfd71f6b043c8ae": {
            "code": "div#me ",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "6e3bb276c237e728": {
            "code": "div#me",
            "time": {
              "$numberLong": "113"
            },
            "correct": "Correct"
          },
          "6e61365b7906364a": {
            "code": "div#me",
            "time": {
              "$numberLong": "69"
            },
            "correct": "Correct"
          },
          "749660598055b524": {
            "code": "div#me",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Correct"
          },
          "754a05bec8fc1059": {
            "code": "#me div",
            "time": {
              "$numberLong": "147"
            },
            "correct": "Incorrect"
          },
          "7b4401b3c14db5ae": {
            "code": "div#me",
            "time": {
              "$numberLong": "12"
            },
            "correct": "Correct"
          },
          "7e5b2cec850a2aff": {
            "code": "div#me",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "7f279e34bfbd28d8": {
            "code": "div#me",
            "time": {
              "$numberLong": "50"
            },
            "correct": "Correct"
          },
          "7f8285ca08a7c23d": {
            "code": "div#me",
            "time": {
              "$numberLong": "35"
            },
            "correct": "Correct"
          },
          "81f2828320160384": {
            "code": "div#me",
            "time": {
              "$numberLong": "68"
            },
            "correct": "Correct"
          },
          "81f3673d45dbbd11": {
            "code": "div#me",
            "time": {
              "$numberLong": "54"
            },
            "correct": "Correct"
          },
          "830cdf0b52f7e097": {
            "code": "#me \u003e #me",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "86b3ac39c3322df7": {
            "code": "div#me",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "87a6eaef0181d2b0": {
            "code": "~",
            "time": {
              "$numberLong": "142"
            },
            "correct": "Incorrect"
          },
          "8b110191c4ec82e6": {
            "code": "div#me",
            "time": {
              "$numberLong": "118"
            },
            "correct": "Correct"
          },
          "8c1f7ac2879400f3": {
            "code": "div#me",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "90e1114fbfc49b4c": {
            "code": "div#me",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "911414941b2523a0": {
            "code": "div#me",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "911bca702e73f25e": {
            "code": "",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Incorrect"
          },
          "916088f8a25f68ab": {
            "code": "div#me",
            "time": {
              "$numberLong": "42"
            },
            "correct": "Correct"
          },
          "9379cba22d7ac999": {
            "code": "div[id=\"me",
            "time": {
              "$numberLong": "74"
            },
            "correct": "Correct"
          },
          "93a6a7d94f4918ff": {
            "code": "div#me",
            "time": {
              "$numberLong": "47"
            },
            "correct": "Correct"
          },
          "972d87a6873ec9b3": {
            "code": "div#me",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "9e6c2caff1d3b44e": {
            "code": "div#me",
            "time": {
              "$numberLong": "57"
            },
            "correct": "Correct"
          },
          "9ebd206bb5ff5c50": {
            "code": "div#me",
            "time": {
              "$numberLong": "34"
            },
            "correct": "Correct"
          },
          "9f2dfe266d0926fd": {
            "code": "div[id=\"me\"]",
            "time": {
              "$numberLong": "64"
            },
            "correct": "Correct"
          },
          "a43e0947ef6a39e6": {
            "code": "div#me",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "a7f10cfda0281de1": {
            "code": "",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "a9e4e4bf5bbd44e2": {
            "code": "#me:nth-child(1);",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Incorrect"
          },
          "aa3387eff3195a54": {
            "code": "id",
            "time": {
              "$numberLong": "104"
            },
            "correct": "Incorrect"
          },
          "adb27aa50f322c9a": {
            "code": "#me",
            "time": {
              "$numberLong": "64"
            },
            "correct": "Incorrect"
          },
          "af94e1b49f9fd125": {
            "code": "div#me",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "b072bc5fe4196a18": {
            "code": "div[id='me",
            "time": {
              "$numberLong": "51"
            },
            "correct": "Correct"
          },
          "b3e25403b5a88b4c": {
            "code": "",
            "time": {
              "$numberLong": "125"
            },
            "correct": "Incorrect"
          },
          "b4b9095a568f933b": {
            "code": "div#me",
            "time": {
              "$numberLong": "72"
            },
            "correct": "Correct"
          },
          "b548101a3c7f3918": {
            "code": "div#me",
            "time": {
              "$numberLong": "57"
            },
            "correct": "Correct"
          },
          "b606ffc3e12081e8": {
            "code": "div#me",
            "time": {
              "$numberLong": "67"
            },
            "correct": "Correct"
          },
          "b62ddb49add38fb7": {
            "code": "div#me",
            "time": {
              "$numberLong": "25"
            },
            "correct": "Correct"
          },
          "b6a56483a4bfda2e": {
            "code": "div#me",
            "time": {
              "$numberLong": "32"
            },
            "correct": "Correct"
          },
          "b81f90294ff8a0d0": {
            "code": "div#me",
            "time": {
              "$numberLong": "68"
            },
            "correct": "Correct"
          },
          "b84f6febc1eb8052": {
            "code": "#not-me",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "b8a7b1aafdd054f6": {
            "code": "div#me",
            "time": {
              "$numberLong": "39"
            },
            "correct": "Correct"
          },
          "b956b65fac918b0d": {
            "code": "div#me",
            "time": {
              "$numberLong": "43"
            },
            "correct": "Correct"
          },
          "bc007c7eb12b758f": {
            "code": "div#me",
            "time": {
              "$numberLong": "93"
            },
            "correct": "Correct"
          },
          "bca8480f5abd3622": {
            "code": "div#me",
            "time": {
              "$numberLong": "50"
            },
            "correct": "Correct"
          },
          "bd750af9cdc1205a": {
            "code": "div#me",
            "time": {
              "$numberLong": "80"
            },
            "correct": "Correct"
          },
          "bd7703518ae1a7cc": {
            "code": "div#me",
            "time": {
              "$numberLong": "119"
            },
            "correct": "Correct"
          },
          "bde7ea1c0cae6b23": {
            "code": "div div ",
            "time": {
              "$numberLong": "139"
            },
            "correct": "Incorrect"
          },
          "bdf748994d76821c": {
            "code": ":",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Incorrect"
          },
          "be36e54d93ecfde9": {
            "code": "#me",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "bfb56b4a3a4e3ae0": {
            "code": "div:nth-child(3)",
            "time": {
              "$numberLong": "146"
            },
            "correct": "Incorrect"
          },
          "bfe18e93e86f6198": {
            "code": "div#me",
            "time": {
              "$numberLong": "62"
            },
            "correct": "Correct"
          },
          "c0709a23b54fbdaa": {
            "code": "",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "c0ba15209a6160bd": {
            "code": "div#me",
            "time": {
              "$numberLong": "97"
            },
            "correct": "Correct"
          },
          "c1605be742d312f7": {
            "code": "div#me",
            "time": {
              "$numberLong": "83"
            },
            "correct": "Correct"
          },
          "c262edfa406f1703": {
            "code": "",
            "time": {
              "$numberLong": "135"
            },
            "correct": "Incorrect"
          },
          "c408a16d75df00b1": {
            "code": "div#me",
            "time": {
              "$numberLong": "33"
            },
            "correct": "Correct"
          },
          "c66aede190d5feb5": {
            "code": "",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "c6fe7dc836560d6c": {
            "code": ".span:last-chi",
            "time": {
              "$numberLong": "151"
            },
            "correct": "Incorrect"
          },
          "c80f59106768f8fc": {
            "code": "div#me",
            "time": {
              "$numberLong": "29"
            },
            "correct": "Correct"
          },
          "c885a4c52d41db0a": {
            "code": "div#me ",
            "time": {
              "$numberLong": "49"
            },
            "correct": "Correct"
          },
          "c95f2638084b7864": {
            "code": "div#me",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "cb3f71bd93fe9387": {
            "code": "div#me",
            "time": {
              "$numberLong": "10"
            },
            "correct": "Correct"
          },
          "cc334b6cceb2c0c7": {
            "code": "div#me",
            "time": {
              "$numberLong": "27"
            },
            "correct": "Correct"
          },
          "cccbd9bb94b15ee6": {
            "code": "div#me",
            "time": {
              "$numberLong": "35"
            },
            "correct": "Correct"
          },
          "cd80f4cca6f54bbd": {
            "code": "div#me ",
            "time": {
              "$numberLong": "53"
            },
            "correct": "Correct"
          },
          "d16390349858cc0c": {
            "code": "div#me",
            "time": {
              "$numberLong": "80"
            },
            "correct": "Correct"
          },
          "d2ec74f1f660690f": {
            "code": ":",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "d36c84d5b707caa5": {
            "code": "div#me",
            "time": {
              "$numberLong": "64"
            },
            "correct": "Correct"
          },
          "d37d52b418e0a03c": {
            "code": "div#me",
            "time": {
              "$numberLong": "45"
            },
            "correct": "Correct"
          },
          "d391e126a6560e50": {
            "code": "document.getElementByld(\"me\")",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "d478346a5082cb06": {
            "code": "div#me",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Correct"
          },
          "d6a4e972f89f58c2": {
            "code": "#me",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Incorrect"
          },
          "d78da08ba35da4da": {
            "code": "#id me me",
            "time": {
              "$numberLong": "129"
            },
            "correct": "Incorrect"
          },
          "d845ae29dc6912c0": {
            "code": "#me div",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Incorrect"
          },
          "d914030007949409": {
            "code": "div#me",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "d971459e842f8ac0": {
            "code": "#me~",
            "time": {
              "$numberLong": "140"
            },
            "correct": "Incorrect"
          },
          "da737425476c1e9c": {
            "code": "div#me",
            "time": {
              "$numberLong": "37"
            },
            "correct": "Correct"
          },
          "e0dcdae0eefc008d": {
            "code": "div#me",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "e1515b0aaf35f202": {
            "code": "div#me",
            "time": {
              "$numberLong": "89"
            },
            "correct": "Correct"
          },
          "e1c3bea6d9deb895": {
            "code": "div \u003e me",
            "time": {
              "$numberLong": "119"
            },
            "correct": "Incorrect"
          },
          "e2118a33ce759dcf": {
            "code": " div#me",
            "time": {
              "$numberLong": "48"
            },
            "correct": "Correct"
          },
          "e35fd0231118b8d7": {
            "code": "div #me",
            "time": {
              "$numberLong": "134"
            },
            "correct": "Incorrect"
          },
          "e756fa9295ad1eed": {
            "code": "div#me",
            "time": {
              "$numberLong": "89"
            },
            "correct": "Correct"
          },
          "e7a0322647de571b": {
            "code": "div[id='me']",
            "time": {
              "$numberLong": "81"
            },
            "correct": "Correct"
          },
          "e901657bdc9a5c8e": {
            "code": "div,#",
            "time": {
              "$numberLong": "150"
            },
            "correct": "Incorrect"
          },
          "ea423a7a257965d5": {
            "code": "div#me",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "ea90a292408db4cd": {
            "code": "div#me",
            "time": {
              "$numberLong": "40"
            },
            "correct": "Correct"
          },
          "eb370cad0cdbdbbc": {
            "code": "div[id=\"me\"]",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "ec8c03effc5b296e": {
            "code": "div #me",
            "time": {
              "$numberLong": "132"
            },
            "correct": "Incorrect"
          },
          "ec98d8bbf455e711": {
            "code": "div#me",
            "time": {
              "$numberLong": "85"
            },
            "correct": "Correct"
          },
          "ecf284cb61b39042": {
            "code": "div#me",
            "time": {
              "$numberLong": "9"
            },
            "correct": "Correct"
          },
          "eea8905c611f6305": {
            "code": "div#me",
            "time": {
              "$numberLong": "44"
            },
            "correct": "Correct"
          },
          "f134617bd286a050": {
            "code": "div#me",
            "time": {
              "$numberLong": "75"
            },
            "correct": "Correct"
          },
          "f3d4f734582a568c": {
            "code": "",
            "time": {
              "$numberLong": "145"
            },
            "correct": "Incorrect"
          },
          "f560fbf3a1ff7e95": {
            "code": "div#me",
            "time": {
              "$numberLong": "67"
            },
            "correct": "Correct"
          },
          "f62cb888146a1b0b": {
            "code": "div#me",
            "time": {
              "$numberLong": "113"
            },
            "correct": "Correct"
          },
          "f65b770c17c75f32": {
            "code": "div#me",
            "time": {
              "$numberLong": "54"
            },
            "correct": "Correct"
          },
          "f7287e04ee25af0e": {
            "code": "div#me",
            "time": {
              "$numberLong": "46"
            },
            "correct": "Correct"
          },
          "f8f1803efa21809f": {
            "code": "div#me ",
            "time": {
              "$numberLong": "124"
            },
            "correct": "Correct"
          },
          "f94da096f90b989a": {
            "code": "#me",
            "time": {
              "$numberLong": "144"
            },
            "correct": "Incorrect"
          },
          "fac46268469de859": {
            "code": "div ",
            "time": {
              "$numberLong": "149"
            },
            "correct": "Incorrect"
          },
          "fbdeb72cd7b8eac3": {
            "code": "div#me",
            "time": {
              "$numberLong": "73"
            },
            "correct": "Correct"
          },
          "fd2e01c77a9563f3": {
            "code": "div#me",
            "time": {
              "$numberLong": "115"
            },
            "correct": "Correct"
          }
        }
      }
    ],
    "player_input": {},
    "puzzle_index": {
      "$numberLong": "0"
    },
    "round_phase": "End",
    "start_countdown": {
      "$numberLong": "0"
    },
    "round_countdown": {
      "$numberLong": "0"
    },
    "alias": "rsschool-demo"
  }
]

export default sessions;