from django import forms

class AccessForm(forms.Form):
    name = forms.CharField(label='name', max_length=100)
    number = forms.CharField(label='number', max_length=100)
    email = forms.CharField(label='email', max_length=100)
    jamatkhana = forms.CharField(label='jamatkhana', max_length=100)
    comments = forms.CharField(label='comments', max_length=100)
