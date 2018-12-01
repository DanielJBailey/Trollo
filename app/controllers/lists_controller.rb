class ListsController < ApplicationController
  before_action :set_board, except: [:update, :destroy]
  before_action :set_list, only: [:show, :edit, :update, :destroy]
  
  def index
    @lists = @board.lists.all
  end

  def show
  end

  def create
    @list = @board.lists.new(list_params)
    @list.board
    if @list.save
      redirect_to board_path(@board)
    else
      redirect_to @board
    end
  end

  def edit
  end

  def update
      if @list.update(title: list_params[:title])
        redirect_to @list.board
      else
        render :edit
      end
  end

  def destroy
    @list.board
    @list.destroy
    redirect_to @list.board
  end

  private
  def set_list
    @list = List.find(params[:id])
  end

  def set_board
    @board = Board.find(params[:board_id])
  end

  def list_params
    params.require(:list).permit(:title)
  end
end
