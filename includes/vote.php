<?php
class Book{
    public string $title; 
    public string $author;
    public int $rating; 
    public float $price; 
    public int $quantity; 

    public function __construct(string $title, string $author, int $rating, float $price, int $quantity){
        $this->title = $title; 
        $this->author = $author; 
        $this->rating = $rating; 
        $this->price = $price; 
        $this->quantity = $quantity; 
    }

    public function checkInStock(): string {
        if ($this->quantity > 0) {
            return "In Stock";
        } else {
            return "Out Of Stock";
        }
    }

    public function buy(): int {
        if ($this->quantity > 0) {
            $this->quantity -= 1;
        }
        return $this->quantity;
    }

    public function showRatingStars(): string {
        $ratingStars = '';
        for ($i = 0; $i < 5; $i++) {
            if ($this->rating > 0) {
                $ratingStars .= '<span class="fa fa-star checked"></span>';
                $this->rating -= 1;
            } else {
                $ratingStars .= '<span class="fa fa-star"></span>';
            }
        }
        return $ratingStars;
    }
}

?>