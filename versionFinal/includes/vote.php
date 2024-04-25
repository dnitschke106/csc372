<?php
class Phase{
    public string $title; 
    public string $period;
    public int $launch; 
    public string $details; 

    public function __construct(string $title, string $period, int $launch, string $details){
        $this->title = $title; 
        $this->period = $period; 
        $this->launch = $launch * 24 * 60 * 60;
        $this->details = $details; 
    }

    public function format_time() {
        $days = floor($this->launch / (3600 * 24));
        return sprintf("%d days", $days);
    }
}

?>