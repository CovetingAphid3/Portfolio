package models

import (
	"gorm.io/gorm"
)

type Message struct {
	gorm.Model
	Name    string `gorm:"not null"`
	Email   string
	Message string `gorm:"not null"`
}
