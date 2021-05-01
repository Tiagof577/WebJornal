module.exports = {
    success: {
        s0: {
            code: "NoticiaCreated",
            http: 201,
            type: "success"
        },
        s1: {
            http: 200,
            code: "NoticiaUpdated",
            type: "success"
        },
        s2: {
            http: 200,
            code: "NoticiaFound",
            type: "success"
        },
        s3: {
            http: 200,
            code: "NoticiaDeleted",
            type: "success"
        },
        s4: {
            http: 200,
            code: "Deactivated",
            type: "success"
        },
        s5: {
            http: 204,
            code: "NoNoticias",
            type: "success"
        },
        s6: {
            http: 200,
            code: "Activated",
            type: "success"
        }
    },
    error: {
        e0: {
            http: 404,
            code: "NoticiaNotFound",
            type: "error"
        }
    }
}