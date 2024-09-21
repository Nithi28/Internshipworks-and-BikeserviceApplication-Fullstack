const graphql=require('graphql')
const _ =require('lodash')
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt,GraphQLList}=graphql;
var books=[
    {name: 'book1',genre:'genre1',id:'1',authorId:'1'},
    {name: 'book2',genre:'genre2',id:'2',authorId:'2'},
    {name: 'book3',genre:'genre3',id:'3',authorId:'3'},
    {name: 'book4',genre:'genre4',id:'4',authorId:'2'},
    {name: 'book5',genre:'genre5',id:'5',authorId:'3'},
    {name: 'book6',genre:'genre6',id:'6',authorId:'3'},
];
var authors=[
    {name:"author 1",age:25,id:'1'},
    {name:"author 2",age:26,id:'2'},
    {name:"author 3",age:27,id:'3'},
];
const BookType=new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                return _.find(authors,{id:parent.authorId});
            }
        }
    })
});
const AuthorType=new GraphQLObjectType({
    name:"Author",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return _.filter(books,{authorId:parent.id})
            }
        }
    })
});
//Root Query
const RootQuery =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //code to get data form db/other source  
                return _.find(books,{id: args.id});
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id})
            }
        },
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                return books
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(parent,args){
                return authors
            }
        }
    }
});
module.exports=new GraphQLSchema({
    query:RootQuery
})
