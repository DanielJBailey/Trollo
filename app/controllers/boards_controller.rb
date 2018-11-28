class BoardsController < ApplicationController
  before_action :set_board, only: [:show, :edit, :destroy, :update]

  def index
    @boards = Board.all
  end

  def show
    @lists = @board.lists.all
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

  def edit
  end

  def update
    @board = Board.new(board_params)
    if @board.update
      redirect_to boards_path
    else
      render :edit
    end
  end

  

  def destroy
  end

  private

  def set_board 
    @board = Board.find(params[:id])
  end

  def board_params
    params.require(:board).permit(:name)
  end
end
