import { Request, Response } from 'express';
import User from '../models/User'; // adjust based on your structure
import { signToken } from '../utils/auth';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const user = await User.create(req.body);
  const token = signToken(user);
  res.json({ token, user });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const user = await User.findOne({ email: req.body.email });

  if (!user || !(await user.isCorrectPassword(req.body.password))) {
    res.status(400).json({ message: 'Incorrect credentials' });
    return;
  }

  const token = signToken(user);
  res.json({ token, user });
};

export const saveBook = async (req: Request, res: Response): Promise<void> => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $addToSet: { savedBooks: req.body } },
    { new: true, runValidators: true }
  );

  res.json(updatedUser);
};

export const getSingleUser = async (req: Request, res: Response): Promise<void> => {
  const user = await User.findOne({ _id: req.user._id }).select('-__v -password');

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  res.json(user);
};

export const deleteBook = async (req: Request, res: Response): Promise<void> => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $pull: { savedBooks: { bookId: req.params.bookId } } },
    { new: true }
  );

  res.json(updatedUser);
};
