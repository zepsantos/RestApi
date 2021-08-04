define({ "api": [
  {
    "type": "post",
    "url": "/groups",
    "title": "Create a Group",
    "name": "CreateGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 CREATED\n {\nmembers: [\n    \"5f1a63f8597c602a4af33b5a\"\n         ],\nid: \"5f238d5119de8d07919bbdf1\",\nname: \"teste\",\nowner: \"5f1a63f8597c602a4af33b5a\",\n__v: 0\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/groupRoutes.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWE0ZjIxNDQ2ODhiMjI2M2E1MmY0ZiIsImlhdCI6MTU5NjE1NjkzNiwiZXhwIjoxNTk2MTU3MDIyfQ.3R1o4o2Q_PsEr4wK_x3VmUHw64LpiDrjRdFq0fBOiFw\",\n  id: \"5f1a4f2144688b2263a52f4f\",\n  email: \"ze@gmail.com\",\n  name: \"ze\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/authRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Register User",
    "name": "RegisterUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  success: true,\n  message: \"Account created\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/userRoutes.js",
    "groupTitle": "User"
  }
] });
