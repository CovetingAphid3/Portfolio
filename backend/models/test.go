package models

import (
	"gorm.io/gorm"
)

type Test struct {
	gorm.Model
	Name    string `gorm:"not null"`
	Email   string
	Message string `gorm:"not null"`
}

