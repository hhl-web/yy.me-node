import {sequelize} from './db.js';
import ArticleCategoty from '../models/article_category';
import ArticleTag from '../models/article_tag';
import Article from '../models/article';
import CommentTable from '../models/comment_table';
import ReplayTable from '../models/replay_table';

sequelize.sync({ force: false, alter:true});






