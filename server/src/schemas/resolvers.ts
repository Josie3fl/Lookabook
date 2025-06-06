import { AuthenticationError } from 'apollo-server-express';
import User from '../models/User';
import { signToken } from '../services/auth';

const resolvers = {
  Query: {
    me: async (_parent: any, _args: any, context: any) => {
      if (context.user) {
        return await User.findById(context.user._id);
      }
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    login: async (_parent: any, { email, password }: any) => {
      const user = await User.findOne({ email });
      if (!user || !(await user.isCorrectPassword(password))) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken({
        username: user.username,
        email: user.email,
        _id: String(user._id),
      });
      return { token, user };
    },
    addUser: async (_parent: any, args: any) => {
      const user = await User.create(args);
      const token = signToken({
        username: user.username,
        email: user.email,
        _id: String(user._id),
      });
      return { token, user };
    },
    saveBook: async (_parent: any, { bookData }: any, context: any) => {
      if (!context.user) throw new AuthenticationError('You need to be logged in!');
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $addToSet: { savedBooks: bookData } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    removeBook: async (_parent: any, { bookId }: any, context: any) => {
      if (!context.user) throw new AuthenticationError('You need to be logged in!');
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
      return updatedUser;
    },
  },
  User: {
    bookCount: (parent: any) => {
      return parent.savedBooks?.length || 0;
    },
  },
};

export default resolvers;
