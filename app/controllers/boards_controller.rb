class BoardsController < ApplicationController
  before_action :set_board, only: [:show, :edit, :destroy, :update]

  def index
    @boards = current_user.boards.all
  end

  def show
    @lists = @board.lists.all
    @list = @board.lists.new
    @card = @list.cards.new
  end

  def new
    @board = Board.new
  end

  def create
    @board = current_user.boards.new(board_params) 
    if @board.save
      redirect_to boards_path
    else
      render :new
    end
  end

  def update
    if @board.update(rename_params)
      redirect_to @board
    else
      render :edit
    end
  end

  def destroy
    @board.destroy
    redirect_to boards_path
  end

  private

  def set_board 
    @board = Board.find(params[:id])
  end

  def board_params
    params.permit(:name)
  end

  def rename_params
    params.require(:board).permit(:name)
  end
end
