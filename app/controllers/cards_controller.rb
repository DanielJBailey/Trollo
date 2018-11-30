class CardsController < ApplicationController
  before_action :set_board
  before_action :set_card, only: [:create, :show, :update, :destroy]
  before_action :set_list

  def index
    @cards = @list.cards.all
  end

  def show
  end

  def create
    @card = @list.cards.new(card_params)
    @card.list
    if @card.save
      redirect_to @board
    else
    end
  end

  def update
  end

  def destroy
  end

  private

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_card
    @card = Card.find(params[:id])
  end

  def set_board
    @board = Board.find(params[:board_id])
  end

  def card_params
    params.require(:card).permit(:title, :description)
  end

  
end
