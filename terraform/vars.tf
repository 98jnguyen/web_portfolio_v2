variable "AWS_REGION" {
	default = "us-west-1"
}

variable "PATH_TO_PRIVATE_KEY" {
	default = "mykey"
}

variable "PATH_TO_PUBLIC_KEY" {
	default = "mykey.pub"
}

variable "AMIS" {
	type = map(string)
	default = {
	 us-west-1 = "ami-0454207e5367abf01"
	 us-west-2 = "ami-0688ba7eeeeefe3cd"
	 us-east-1 = "ami-0b0ea68c435eb488d"
	}
}
