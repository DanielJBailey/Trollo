class BoardsController < ApplicationController

  def index
    @boards = Board.all
  end

  def show
  end

  def edit
  end

  def update
  end

  def new
  end

  def create
  end

  def delete
  end

  private

  def set_board 
    @board = Board.find(params[:id])
  end

  def board_params
    params.require(:board).permit(:name)
  end
end
