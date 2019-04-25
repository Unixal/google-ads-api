module.exports = {
    name: 'TopicConstant',
    object: {
        id: { _type: 'int64', _description: 'The ID of the topic.' },
        path: {
            _type: 'array',
            _description:
                'The category to target or exclude. Each subsequent element in the array\ndescribes a more specific sub-category. For example,\n{"Pets & Animals", "Pets", "Dogs"} represents the\n"Pets & Animals/Pets/Dogs" category. A complete list of available topic\ncategories is available\n<a\nhref="https://developers.google.com/adwords/api/docs/appendix/verticals">\nhere</a>',
        },
        topic_constant_parent: { _type: 'string', _description: 'Resource name of parent of the topic constant.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the topic constant.\ntopic constant resource names have the form:\n\n`topicConstants/{topic_id}`',
        },
    },
    methods: ['get', 'list'],
}